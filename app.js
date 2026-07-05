// ==========================================================================
// Aether Notice Board - Application State & Interaction Logic
// ==========================================================================

// --- Initial Mock Data ---
const DEFAULT_NOTICES = [
  {
    id: "notice-1",
    title: "Final Term Examination Schedule - Autumn Semester 2026",
    category: "exam",
    content: "Attention all students! The Office of Academics has released the final timetable for the Autumn Semester 2026 Term Examinations. \n\n**Key Details:**\n* Exams commence on: **November 10, 2026**\n* Timing: Morning session (09:30 AM - 12:30 PM) and Afternoon session (02:00 PM - 05:00 PM)\n* Venue: Block C and Block D Exam Halls\n\nPlease check the attached PDF for course-wise dates, slot codes, and hall seating arrangements. Make sure to bring your physical ID card and hall tickets. Strict adherence to exam guidelines is mandatory.\n\nGood luck with your preparation!",
    author: "Office of Academics",
    date: "2026-07-05T10:00:00.000Z",
    isPinned: true,
    isUrgent: true,
    attachment: {
      name: "exam_timetable_v1.pdf",
      type: "pdf",
      size: "1.2 MB"
    },
    likes: 42,
    comments: [
      {
        id: "c-1-1",
        author: "Alex Rivers",
        avatar: "AR",
        content: "Are we allowed to bring scientific calculators for the Discrete Mathematics exam?",
        date: "2026-07-05T11:15:00.000Z"
      },
      {
        id: "c-1-2",
        author: "Prof. Sarah Jenkins (Admin)",
        avatar: "SJ",
        content: "Yes, non-programmable scientific calculators are permitted for MATH-302. Please ensure they have no written text on the cases.",
        date: "2026-07-05T11:45:00.000Z"
      }
    ]
  },
  {
    id: "notice-2",
    title: "Annual Hackathon 'AetherHack 2026' Registrations Open!",
    category: "event",
    content: "Get ready to innovate, code, and win! The department of Computer Science presents the annual 36-hour hackathon: **AetherHack 2026**.\n\n**Themes:** Smart Cities, AI-Driven Education, Sustainability Tech, and Open Innovation.\n\n**Prizes & Perks:**\n* Cash prize pool of **$5,000**\n* Internship opportunities at leading tech companies\n* Free custom event hoodies, merchandise, and meals!\n\n**Rules:** Teams must consist of 2 to 4 students. Open to all branches and years. Register using the portal before the deadline: **October 15, 2026**.\n\nRefer to the attached guidelines document for eligibility, grading rubric, and schedule.",
    author: "ACM Student Chapter",
    date: "2026-07-04T14:30:00.000Z",
    isPinned: false,
    isUrgent: true,
    attachment: {
      name: "hackathon_guidelines.docx",
      type: "word",
      size: "840 KB"
    },
    likes: 89,
    comments: [
      {
        id: "c-2-1",
        author: "Meera Patel",
        avatar: "MP",
        content: "Can first-year students form a team, or do we need a senior member? We really want to join!",
        date: "2026-07-04T16:00:00.000Z"
      },
      {
        id: "c-2-2",
        author: "ACM Support (Admin)",
        avatar: "AS",
        content: "Teams can be 100% first-years! There are special prizes specifically for freshman teams. Register away!",
        date: "2026-07-04T17:12:00.000Z"
      }
    ]
  },
  {
    id: "notice-3",
    title: "Google Campus Recruitment Drive - Software Engineer Roles (2027 Graduating Batch)",
    category: "placement",
    content: "The Placement & Careers Cell is excited to announce the upcoming Google Campus Recruitment Drive. Google is hiring for Software Engineering (SWE) roles. \n\n**Eligibility Criteria:**\n* Degree: B.Tech / M.Tech in CSE, IT, ECE or related engineering disciplines\n* Minimum CGPA: **7.5** with no active backlogs\n* Batch: Graduating in Summer 2027\n\n**Application Workflow:**\n1. Review the attached job description and eligibility details.\n2. Submit your updated resume on the Placement Portal by **July 30, 2026, 05:00 PM**.\n3. Keep your DSA, System Design, and basic Networking principles brushed up for the initial coding rounds.\n\nLate submissions will strictly not be entertained.",
    author: "Placement Cell Coordinator",
    date: "2026-07-03T09:00:00.000Z",
    isPinned: false,
    isUrgent: false,
    attachment: {
      name: "job_roles_excel.xlsx",
      type: "excel",
      size: "450 KB"
    },
    likes: 120,
    comments: []
  },
  {
    id: "notice-4",
    title: "Extended Library Timings for Mid-Sem Prep Week",
    category: "general",
    content: "To support students preparing for the upcoming Mid-Semester Examinations, the Central Library will observe extended operational hours.\n\nStarting from **Monday, October 12, 2026**, the library will be open **24/7** for reading room access.\n\n* **Borrowing services:** 08:00 AM to 08:00 PM only.\n* **Reading Room access:** 24 Hours (Requires biometric access/valid Student ID after 09:00 PM).\n* **Rules:** Silent study protocol will be strictly enforced. Food is not allowed inside, but bottled water is permitted. Security staff will conduct regular rounds.",
    author: "Chief Librarian",
    date: "2026-07-02T11:20:00.000Z",
    isPinned: false,
    isUrgent: false,
    likes: 56,
    comments: [
      {
        id: "c-4-1",
        author: "Devon Lee",
        avatar: "DL",
        content: "Awesome initiative! Will the campus canteen also stay open late?",
        date: "2026-07-02T12:00:00.000Z"
      },
      {
        id: "c-4-2",
        author: "Chief Librarian",
        avatar: "CL",
        content: "Yes, the main cafeteria near Block B will remain open until 02:00 AM during this prep week.",
        date: "2026-07-02T14:30:00.000Z"
      }
    ]
  }
];

// --- App State ---
let state = {
  currentRole: 'student', // 'student' or 'admin'
  activeCategory: 'all',  // 'all', 'exam', 'event', 'placement', 'general', 'starred'
  searchQuery: '',
  sortBy: 'recent',       // 'recent' or 'pinned'
  notices: [],
  starredNotices: [],
  likedNotices: [],
  readNotices: [],
  selectedFile: null      // For temporary attachment storage in form
};

// --- DOM References ---
const D = {
  roleStudent: document.getElementById('btn-student'),
  roleAdmin: document.getElementById('btn-admin'),
  userAvatarProfile: document.getElementById('user-avatar-profile'),
  userAvatarInitials: document.getElementById('user-avatar-initials'),
  heroTitleText: document.getElementById('hero-title-text'),
  heroBanner: document.getElementById('hero-banner'),
  adminCreateNoticeContainer: document.getElementById('admin-create-notice-container'),
  
  createNoticeCollapsed: document.getElementById('create-notice-collapsed'),
  createNoticeForm: document.getElementById('create-notice-form'),
  cancelCreateNotice: document.getElementById('cancel-create-notice'),
  btnCancelNotice: document.getElementById('btn-cancel-notice'),
  
  // Notice Form Fields
  formNoticeTitle: document.getElementById('notice-title'),
  formNoticeCategory: document.getElementById('notice-category'),
  formNoticeAuthor: document.getElementById('notice-author'),
  formNoticeContent: document.getElementById('notice-content'),
  formNoticeIsPinned: document.getElementById('notice-is-pinned'),
  formNoticeIsUrgent: document.getElementById('notice-is-urgent'),
  btnAttachMock: document.getElementById('btn-attach-mock'),
  mockFilesDrawer: document.getElementById('mock-files-drawer'),
  attachedFileDisplay: document.getElementById('attached-file-display'),
  attachedFileName: document.getElementById('attached-file-name'),
  
  // Search & Sorting
  searchInput: document.getElementById('search-input'),
  clearSearch: document.getElementById('clear-search'),
  searchStatusBanner: document.getElementById('search-status-banner'),
  searchQueryText: document.getElementById('search-query-text'),
  resetSearchBannerBtn: document.getElementById('reset-search-banner-btn'),
  sortRecent: document.getElementById('sort-recent'),
  sortPinned: document.getElementById('sort-pinned'),
  
  // Feed Layout
  currentFilterTitle: document.getElementById('current-filter-title'),
  emptyFeedState: document.getElementById('empty-feed-state'),
  noticesStreamList: document.getElementById('notices-stream-list'),
  categoryBtns: document.querySelectorAll('.cat-filter-btn'),
  
  // Stats Counters
  statTotalCount: document.getElementById('stat-total-count'),
  statUrgentCount: document.getElementById('stat-urgent-count'),
  statStarredCount: document.getElementById('stat-starred-count'),
  
  // Sidebar count badges
  countAll: document.getElementById('count-all'),
  countExam: document.getElementById('count-exam'),
  countEvent: document.getElementById('count-event'),
  countPlacement: document.getElementById('count-placement'),
  countGeneral: document.getElementById('count-general'),
  countStarred: document.getElementById('count-starred'),
  
  // Ticker
  tickerItems: document.getElementById('ticker-items'),
  
  // Modal Detailed View
  modalBackdrop: document.getElementById('notice-modal-backdrop'),
  closeNoticeModal: document.getElementById('close-notice-modal'),
  modalCategoryBadge: document.getElementById('modal-category-badge'),
  modalAuthorAvatar: document.getElementById('modal-author-avatar'),
  modalAuthorName: document.getElementById('modal-author-name'),
  modalPostDate: document.getElementById('modal-post-date'),
  modalStarBtn: document.getElementById('modal-star-btn'),
  modalDeleteBtn: document.getElementById('modal-delete-btn'),
  modalNoticeTitle: document.getElementById('modal-notice-title'),
  modalNoticeBody: document.getElementById('modal-notice-body'),
  modalAttachmentsContainer: document.getElementById('modal-attachments-container'),
  modalFileName: document.getElementById('modal-file-name'),
  modalFileSize: document.getElementById('modal-file-size'),
  modalFileIcon: document.getElementById('modal-file-icon'),
  btnDownloadAttachment: document.getElementById('btn-download-attachment'),
  
  // Comments
  modalCommentsCount: document.getElementById('modal-comments-count'),
  modalCommentsList: document.getElementById('modal-comments-list'),
  commentInputAvatar: document.getElementById('comment-input-avatar'),
  commentTextarea: document.getElementById('comment-textarea'),
  btnSubmitComment: document.getElementById('btn-submit-comment'),
  
  // Bell Notifications
  notificationBell: document.getElementById('notification-bell'),
  bellBadgeCount: document.getElementById('bell-badge-count'),
  notificationDropdown: document.getElementById('notification-dropdown'),
  notificationList: document.getElementById('notification-list'),
  markAllRead: document.getElementById('mark-all-read'),
  
  // Toast
  toastNotification: document.getElementById('toast-notification'),
  toastMessage: document.getElementById('toast-message')
};

// --- Helper Functions ---

// Simple markdown formatter
function renderMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
  return html;
}

// Format ISO date string into readable text
function formatFriendlyDate(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // If posted today, show "X hours ago" or "Today"
  if (date.toDateString() === now.toDateString()) {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours < 1) {
      const diffMins = Math.floor(diffTime / (1000 * 60));
      return diffMins <= 1 ? "Just now" : `${diffMins}m ago`;
    }
    return `${diffHours}h ago`;
  }
  
  // Options for full date formatting
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Show popup toast message
function showToast(message, type = 'info') {
  D.toastMessage.textContent = message;
  const icon = D.toastNotification.querySelector('.toast-icon');
  
  if (type === 'success') {
    icon.setAttribute('data-lucide', 'check-circle');
    D.toastNotification.style.borderLeft = "4px solid var(--placement-color)";
  } else if (type === 'error') {
    icon.setAttribute('data-lucide', 'x-circle');
    D.toastNotification.style.borderLeft = "4px solid var(--exam-color)";
  } else {
    icon.setAttribute('data-lucide', 'info');
    D.toastNotification.style.borderLeft = "4px solid var(--color-primary)";
  }
  
  lucide.createIcons();
  D.toastNotification.classList.add('active');
  
  setTimeout(() => {
    D.toastNotification.classList.remove('active');
  }, 4000);
}

// Local Storage Synchronizers
function saveStateToStorage() {
  localStorage.setItem('aether_notices', JSON.stringify(state.notices));
  localStorage.setItem('aether_starred', JSON.stringify(state.starredNotices));
  localStorage.setItem('aether_liked', JSON.stringify(state.likedNotices));
  localStorage.setItem('aether_read', JSON.stringify(state.readNotices));
  localStorage.setItem('aether_role', state.currentRole);
}

function loadStateFromStorage() {
  const savedNotices = localStorage.getItem('aether_notices');
  const savedStarred = localStorage.getItem('aether_starred');
  const savedLiked = localStorage.getItem('aether_liked');
  const savedRead = localStorage.getItem('aether_read');
  const savedRole = localStorage.getItem('aether_role');

  state.notices = savedNotices ? JSON.parse(savedNotices) : DEFAULT_NOTICES;
  state.starredNotices = savedStarred ? JSON.parse(savedStarred) : [];
  state.likedNotices = savedLiked ? JSON.parse(savedLiked) : [];
  state.readNotices = savedRead ? JSON.parse(savedRead) : ["notice-1", "notice-2", "notice-3", "notice-4"]; // Prepopulate read list for mock data
  state.currentRole = savedRole ? savedRole : 'student';
}

// --- Dynamic Rendering Modules ---

// 1. Render Ticker
function renderTicker() {
  D.tickerItems.innerHTML = "";
  const urgentNotices = state.notices.filter(n => n.isUrgent);
  
  if (urgentNotices.length === 0) {
    D.tickerItems.innerHTML = `<div class="ticker-item"><span>No urgent notifications at this time. Have a productive week!</span></div>`;
    return;
  }
  
  // Clone array to double items for infinite scrolling visual stability
  const scrollItems = [...urgentNotices, ...urgentNotices];
  
  scrollItems.forEach((notice, index) => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.dataset.id = notice.id;
    item.innerHTML = `
      <span class="ticker-tag ${notice.category}">${notice.category}</span>
      <span>${notice.title}</span>
    `;
    item.addEventListener('click', () => openNoticeDetails(notice.id));
    D.tickerItems.appendChild(item);
  });
}

// 2. Render Sidebar Count Badges & Stats
function updateStatsAndBadges() {
  const notices = state.notices;
  const starred = state.starredNotices;
  
  // Sidebar Category counts
  D.countAll.textContent = notices.length;
  D.countExam.textContent = notices.filter(n => n.category === 'exam').length;
  D.countEvent.textContent = notices.filter(n => n.category === 'event').length;
  D.countPlacement.textContent = notices.filter(n => n.category === 'placement').length;
  D.countGeneral.textContent = notices.filter(n => n.category === 'general').length;
  D.countStarred.textContent = starred.length;
  
  // Hero stats block
  D.statTotalCount.textContent = `${notices.length} Notices`;
  D.statUrgentCount.textContent = `${notices.filter(n => n.isUrgent).length} Urgent`;
  D.statStarredCount.textContent = `${starred.length} Starred`;
}

// 3. Render Notification Bell & Dropdown
function renderNotifications() {
  const notices = [...state.notices].sort((a,b) => new Date(b.date) - new Date(a.date));
  const unreadCount = notices.filter(n => !state.readNotices.includes(n.id)).length;
  
  // Bell Badge Count
  if (unreadCount > 0) {
    D.bellBadgeCount.textContent = unreadCount;
    D.bellBadgeCount.style.display = 'flex';
  } else {
    D.bellBadgeCount.style.display = 'none';
  }
  
  // Dropdown list
  D.notificationList.innerHTML = "";
  if (notices.length === 0) {
    D.notificationList.innerHTML = `<div class="dropdown-empty">No updates available</div>`;
    return;
  }
  
  // Limit to most recent 5
  notices.slice(0, 5).forEach(notice => {
    const isUnread = !state.readNotices.includes(notice.id);
    const item = document.createElement('div');
    item.className = `dropdown-item ${isUnread ? 'unread' : ''}`;
    item.innerHTML = `
      <div class="item-badge ${notice.category}"></div>
      <div class="item-info">
        <span class="item-title">${notice.title}</span>
        <span class="item-time">${formatFriendlyDate(notice.date)}</span>
      </div>
    `;
    item.addEventListener('click', () => {
      // Mark as read
      if (isUnread) {
        state.readNotices.push(notice.id);
        saveStateToStorage();
        renderNotifications();
      }
      D.notificationDropdown.classList.remove('active');
      openNoticeDetails(notice.id);
    });
    D.notificationList.appendChild(item);
  });
}

// 4. Render Notice Cards Stream Feed
function renderNoticesStream() {
  D.noticesStreamList.innerHTML = "";
  
  // Filtering
  let filtered = state.notices;
  
  // Filter by category
  if (state.activeCategory !== 'all' && state.activeCategory !== 'starred') {
    filtered = filtered.filter(n => n.category === state.activeCategory);
  } else if (state.activeCategory === 'starred') {
    filtered = filtered.filter(n => state.starredNotices.includes(n.id));
  }
  
  // Filter by Search Query
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(n => 
      n.title.toLowerCase().includes(q) || 
      n.content.toLowerCase().includes(q) || 
      n.author.toLowerCase().includes(q) ||
      (n.attachment && n.attachment.name.toLowerCase().includes(q))
    );
  }
  
  // Sorting
  if (state.sortBy === 'recent') {
    // Sort by date newest first
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (state.sortBy === 'pinned') {
    // Pinned notices first, then newest
    filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.date) - new Date(a.date);
    });
  }
  
  // Render feed states
  if (filtered.length === 0) {
    D.emptyFeedState.style.display = 'block';
    return;
  }
  
  D.emptyFeedState.style.display = 'none';
  
  filtered.forEach(notice => {
    const card = document.createElement('div');
    
    // Build card structure
    const isStarred = state.starredNotices.includes(notice.id);
    const isLiked = state.likedNotices.includes(notice.id);
    const isPinned = notice.isPinned;
    const isUrgent = notice.isUrgent;
    
    card.className = `notice-card ${isPinned ? 'pinned' : ''} ${isUrgent ? 'urgent-card' : ''}`;
    card.dataset.id = notice.id;
    
    // Generate inner html
    let attachmentHtml = "";
    if (notice.attachment) {
      attachmentHtml = `
        <div class="card-attachment-clip ${notice.attachment.type}">
          <i data-lucide="paperclip"></i>
          <span>${notice.attachment.name}</span>
        </div>
      `;
    }
    
    // Author Initials for Avatar
    const initials = notice.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    
    // Hide delete button from Student Role
    const deleteBtnHtml = state.currentRole === 'admin' 
      ? `<button class="card-top-btn delete" title="Delete notice" data-action="delete">
          <i data-lucide="trash-2"></i>
         </button>` 
      : "";
      
    card.innerHTML = `
      <!-- Tags header row -->
      <div class="card-author-row">
        <div class="author-details">
          <div class="user-avatar-circle mini ${notice.category === 'exam' ? 'admin-mode' : ''}">
            <span>${initials}</span>
          </div>
          <div class="author-info-text">
            <h4>${notice.author}</h4>
            <span class="post-time-stamp">${formatFriendlyDate(notice.date)}</span>
          </div>
        </div>
        <div class="card-actions-top">
          ${isPinned ? `
            <div class="notice-pin-tag">
              <i data-lucide="pin"></i>
              <span>Pinned</span>
            </div>
          ` : ''}
          <button class="card-top-btn ${isStarred ? 'starred' : ''}" title="Star Notice" data-action="star">
            <i data-lucide="star"></i>
          </button>
          ${deleteBtnHtml}
        </div>
      </div>

      <!-- Main card content click area -->
      <div class="card-content" data-action="open">
        <div class="card-tags">
          <span class="notice-badge ${notice.category}">${notice.category}</span>
          ${isUrgent ? `<span class="notice-badge exam">Urgent</span>` : ''}
        </div>
        <h3>${notice.title}</h3>
        <p>${notice.content}</p>
      </div>

      <!-- Attached files block -->
      ${attachmentHtml}

      <!-- Interactive stats footer -->
      <div class="card-footer">
        <div class="card-stats-group">
          <div class="stat-item ${isLiked ? 'active' : ''}" data-action="like">
            <i data-lucide="thumbs-up"></i>
            <span>${notice.likes} Likes</span>
          </div>
          <div class="stat-item" data-action="open">
            <i data-lucide="message-square"></i>
            <span>${notice.comments.length} Class Comments</span>
          </div>
        </div>
        <div class="stat-item" data-action="open" style="color: var(--color-primary);">
          <span>Read announcement →</span>
        </div>
      </div>
    `;
    
    // Add Click listener delegation on the notice card
    card.addEventListener('click', (e) => {
      const target = e.target.closest('button') || e.target.closest('.stat-item') || e.target.closest('.card-attachment-clip') || e.target.closest('.card-content');
      if (!target) return;
      
      const action = target.dataset.action || target.getAttribute('data-action');
      
      if (action === 'star') {
        e.stopPropagation();
        toggleStarNotice(notice.id);
      } else if (action === 'delete') {
        e.stopPropagation();
        deleteNotice(notice.id);
      } else if (action === 'like') {
        e.stopPropagation();
        toggleLikeNotice(notice.id);
      } else {
        // Open card details
        openNoticeDetails(notice.id);
      }
    });

    D.noticesStreamList.appendChild(card);
  });
  
  lucide.createIcons();
}

// --- Interaction Logics ---

// 1. Switch Role (Student <-> Admin)
function switchRole(role) {
  state.currentRole = role;
  
  // Toggle Active styling on toggle group
  if (role === 'admin') {
    D.roleAdmin.classList.add('active');
    D.roleStudent.classList.remove('active');
    
    // Update profile icon details
    D.userAvatarInitials.textContent = "AD";
    D.userAvatarProfile.classList.add('admin-mode');
    
    // Update Hero elements
    D.heroTitleText.textContent = "Aether Faculty Hub (Admin)";
    D.heroBanner.classList.add('admin-theme');
    
    // Show creation block
    D.adminCreateNoticeContainer.style.display = 'block';
    
    // Comment input avatar initials update
    D.commentInputAvatar.textContent = "AD";
    D.commentInputAvatar.style.backgroundColor = "var(--color-accent-light)";
    D.commentInputAvatar.style.borderColor = "var(--color-accent)";
    
    showToast("Switched to Administrator View", "info");
  } else {
    D.roleStudent.classList.add('active');
    D.roleAdmin.classList.remove('active');
    
    // Update profile details
    D.userAvatarInitials.textContent = "ST";
    D.userAvatarProfile.classList.remove('admin-mode');
    
    // Update Hero elements
    D.heroTitleText.textContent = "Welcome back, Student!";
    D.heroBanner.classList.remove('admin-theme');
    
    // Hide creation block
    D.adminCreateNoticeContainer.style.display = 'none';
    
    // Comment input initials update
    D.commentInputAvatar.textContent = "ST";
    D.commentInputAvatar.style.backgroundColor = "var(--color-primary-light)";
    D.commentInputAvatar.style.borderColor = "var(--color-primary)";
    
    showToast("Switched to Student View", "info");
  }
  
  saveStateToStorage();
  renderNoticesStream(); // Re-render feed to apply/remove delete buttons
}

// 2. Star/Bookmark notice card toggle
function toggleStarNotice(noticeId) {
  const index = state.starredNotices.indexOf(noticeId);
  if (index === -1) {
    state.starredNotices.push(noticeId);
    showToast("Announcement pinned in your bookmarks", "success");
  } else {
    state.starredNotices.splice(index, 1);
    showToast("Announcement removed from bookmarks", "info");
  }
  
  saveStateToStorage();
  updateStatsAndBadges();
  renderNoticesStream();
  
  // Sync details modal Star icon if open
  if (D.modalBackdrop.style.display === 'flex') {
    const modalNoticeId = D.modalBackdrop.dataset.id;
    if (modalNoticeId === noticeId) {
      updateModalStarButton(state.starredNotices.includes(noticeId));
    }
  }
}

// 3. Like notice toggle
function toggleLikeNotice(noticeId) {
  const notice = state.notices.find(n => n.id === noticeId);
  if (!notice) return;
  
  const likedIndex = state.likedNotices.indexOf(noticeId);
  if (likedIndex === -1) {
    state.likedNotices.push(noticeId);
    notice.likes += 1;
  } else {
    state.likedNotices.splice(likedIndex, 1);
    notice.likes -= 1;
  }
  
  saveStateToStorage();
  renderNoticesStream();
}

// 4. Delete notice
function deleteNotice(noticeId) {
  if (!confirm("Are you sure you want to delete this notice? This action cannot be undone.")) return;
  
  // Filter notices
  state.notices = state.notices.filter(n => n.id !== noticeId);
  
  // Filter starred/read lists
  state.starredNotices = state.starredNotices.filter(id => id !== noticeId);
  state.readNotices = state.readNotices.filter(id => id !== noticeId);
  state.likedNotices = state.likedNotices.filter(id => id !== noticeId);
  
  saveStateToStorage();
  updateStatsAndBadges();
  renderTicker();
  renderNotifications();
  renderNoticesStream();
  
  // Close details modal if the deleted notice was open
  if (D.modalBackdrop.style.display === 'flex' && D.modalBackdrop.dataset.id === noticeId) {
    closeDetailsModal();
  }
  
  showToast("Notice deleted successfully", "success");
}

// 5. Open Detailed Notice Modal
function openNoticeDetails(noticeId) {
  const notice = state.notices.find(n => n.id === noticeId);
  if (!notice) return;
  
  // Mark notice as read
  if (!state.readNotices.includes(noticeId)) {
    state.readNotices.push(noticeId);
    saveStateToStorage();
    renderNotifications();
  }
  
  // Save active ID in modal data attribute
  D.modalBackdrop.dataset.id = noticeId;
  
  // Set Category Tag details
  D.modalCategoryBadge.textContent = notice.category;
  D.modalCategoryBadge.className = `modal-category-tag ${notice.category}`;
  
  // Author information
  const initials = notice.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  D.modalAuthorAvatar.textContent = initials;
  D.modalAuthorAvatar.className = `author-avatar-big ${notice.category === 'exam' ? 'admin-mode' : ''}`;
  D.modalAuthorName.textContent = notice.author;
  D.modalPostDate.textContent = new Date(notice.date).toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
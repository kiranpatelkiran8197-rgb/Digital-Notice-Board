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
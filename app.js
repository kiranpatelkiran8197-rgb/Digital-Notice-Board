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
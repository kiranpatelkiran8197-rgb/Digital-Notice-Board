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
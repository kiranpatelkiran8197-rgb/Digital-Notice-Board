# Project Presentation - Aether Portal (Digital Notice Board)

Use this markdown deck to build your Google Slides or PowerPoint presentation. Speaker notes are included below each slide's outline.

---

## 📺 Slide 1: Project Title
**Aether Portal**  
*A Modern, Interactive Digital Notice Board for College Campuses*

* **Presenter**: Kiran Patel
* **Course**: College Project Semester 2026
* **Repository**: [GitHub Link](https://github.com/kiranpatelkiran8197-rgb/Digital-Notice-Board)

> **Speaker Notes:**  
> "Good morning everyone. Today, I'm presenting Aether Portal, which is an interactive Digital Notice Board app designed for college campuses to streamline academic and event announcements."

---

## 📺 Slide 2: The Problem Statement
* **Information Overload**: Notices are scattered across paper boards, WhatsApp groups, LMS tools, and student emails.
* **Lack of Visibility**: Critical updates (exam schedules, placements) are easily missed or buried.
* **Passive Communication**: Static PDF documents offer zero space for discussions or instant Q&A.
* **Cluttered Feed**: Students cannot easily filter out irrelevant notices.

> **Speaker Notes:**  
> "The main issue on campus today is notice visibility. Important notices are either missed entirely or buried in paper clutter. Additionally, traditional boards are strictly one-way communication."

---

## 📺 Slide 3: Proposed Solution
* **Google Classroom Inspired Layout**: Clean, structured stream-like feed that feels familiar.
* **Real-time Interactivity**: Students can star bookmarks, like posts, and post class comments for discussion.
* **Clear Role Access**: Easily switch views between **Faculty/Admins** (create/pin/delete announcements) and **Students** (read/bookmark/comment).
* **Live High-Priority Ticker**: Megaphone-styled urgent announcement ticker scrolling at the top.

> **Speaker Notes:**  
> "Our solution is Aether Portal. It combines the clean stream feel of Google Classroom with interactive components like live scrolling urgent tickers, category filters, and comments."

---

## 📺 Slide 4: Tech Stack & Architecture
* **Frontend Structure**: Semantic HTML5 (header, main, aside, section) with Lucide Outline Icons.
* **Design System**: Vanilla CSS3 Custom Properties (CSS variables) for light/admin color mapping, responsive grid structures, and keyframe animations.
* **Dynamic Logic**: Vanilla ECMAScript modules managing card rendering, role swaps, count calculations, and search debounces.
* **Storage Cache**: Client-side `localStorage` data store preserving notice creation, comments, and stars.

> **Speaker Notes:**  
> "To keep execution instant and avoid build-tool overhead, we built the app using pure HTML5, CSS3, and JavaScript. We used CSS variables for styling and LocalStorage to save data."

---

## 📺 Slide 5: Key App Features (Demo Highlights)
1. **Dynamic Counting Badge**: Calculates the active notice count in the sidebar per category.
2. **Search Bar Filter**: Real-time filtering matching titles, bodies, and attachment filenames.
3. **Simulated Attachments**: Faculty can choose files (Timetable PDFs, hackathon guidelines) to attach.
4. **Toast Alerts**: Micro-interaction alerts for notice creation and download simulations.

> **Speaker Notes:**  
> "Key highlights of the app include real-time keyword search, counting badges that update when notices are deleted or added, and simulated file attachments."

---

## 📺 Slide 6: Git Workflow & Dev History
* **Branch Strategy**: Utilized `main` branch for stable releases and `dev` branch for working updates.
* **Incremental Commits**: Created a developmental timeline of 30 commits tracking separate stages (HTML layouts, CSS resets, logic components, modal overlays).
* **Version Control Tags**: Tagged release version `v1.0.0` for deployment ready builds.
* **Documentation**: Configured `.gitignore` and `CONTRIBUTORS.md` project logs.

> **Speaker Notes:**  
> "We maintained a clean development workflow, using branches for features and committing 30 separate developmental stages. We also tagged a stable release v1.0.0."

---

## 📺 Slide 7: Future Scope
* **Live Backends**: Integrate MongoDB/Firebase for server-side notices list management.
* **Secure Auth**: Integrate OAuth2 Single Sign-On restricted to verified college domains (e.g. `@college.edu`).
* **Rich Formats**: Support WYSIWYG text editors for rich faculty postings.
* **Calendar View**: Extend sidebar layouts with date selectors highlighting scheduled events.

> **Speaker Notes:**  
> "In the future, we plan to connect the frontend to a cloud backend, implement real Google OAuth log-ins, and add a calendar panel for event dates."

---

## 📺 Slide 8: Demo & Questions
* **Live Link**: http://localhost:8080
* **Thank You!**

> **Speaker Notes:**  
> "Thank you for your time. I will now open the live web demo on port 8080 and demonstrate the student-admin interactions. Any questions?"

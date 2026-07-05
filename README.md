# Aether Portal - College Digital Notice Board

Welcome to **Aether Portal**, a premium, highly interactive digital notice board single-page web application (SPA) tailored for college campus communications. Modeled after the stream layout of Google Classroom, it provides administrators with posting tools and students with an interactive, categorized stream.

## ✨ Key Features

1. **Role Switcher Widget**: Toggle between the **Student** and **Admin** profiles with a single click. Allows you to test notice creation, notice pinning, and deletion.
2. **Dynamic Categories & Counts**: Filter announcements into *Exams*, *Events*, *Placements*, or *General Info*. Category sidebars dynamically compute and display the active post count.
3. **Keyword Search**: Type terms or filenames into the search field to filter notices in real-time.
4. **Live Urgent Ticker**: Scrolling banner displaying important announcements, pulsing to capture immediate attention.
5. **Classroom Hero Banner**: Beautiful gradient card matching active roles with statistics counters.
6. **Class Commenting Threads**: Read and contribute to discussion boards on individual notice sheets.
7. **Simulated Attachments**: Select document mocks (Timetable PDFs, guidelines Word files) to attach to admin announcements.
8. **Starred / Saved Tab**: Students can star announcements to keep them pinned under a dedicated bookmarks tab.
9. **Notification Bell**: Tracks new notice posts and highlights counts of unread announcements.
10. **LocalStorage Syncing**: Keeps all custom announcements, stars, comments, and role settings saved across browser reloads.

## 🛠️ How to Open & Run

To run the application, open the folder in your terminal and launch a local web server (needed for ES Module imports to function properly without browser security errors).

### Using `npx` (Recommended)
Launch a local development server instantly using `http-server` or `live-server`:

```powershell
npx http-server
```
or
```powershell
npx live-server
```

Once running, navigate to the local URL (usually `http://localhost:8080`) in your web browser.

### Alternatively, opening via Visual Studio Code Live Server
1. Open this folder in VS Code.
2. Click **Go Live** on the bottom status bar (using the Live Server extension).

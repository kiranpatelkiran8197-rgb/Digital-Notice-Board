import json
import urllib.request
import urllib.error

# Config
REPO = "kiranpatelkiran8197-rgb/Digital-Notice-Board"

# Define the 5 issues to create
ISSUES = [
    {
        "title": "Implement Light/Dark Theme Toggle",
        "body": "Add a visual switcher button in the main navigation header allowing students and faculty to toggle between clean Light mode and sleek Dark mode. Smooth CSS transitions should be used for theme conversions.",
        "labels": ["enhancement", "ui"]
    },
    {
        "title": "Add Database Persistence with Firebase/MongoDB",
        "body": "Transition the current mock client-side localStorage system into a permanent database layer. Admins should be authenticated securely, and posted notices must sync to a centralized database cluster.",
        "labels": ["high-priority", "backend"]
    },
    {
        "title": "Integrate Rich Text WYSIWYG Editor for Admins",
        "body": "Replace the standard notice body textarea with a rich text editor (e.g., Quill or TinyMCE) to enable admins to highlight text, build tables, insert clean lists, and add hyperlinks directly to announcements.",
        "labels": ["enhancement", "admin-hub"]
    },
    {
        "title": "Add Calendar View & Date Filtering",
        "body": "Introduce a calendar panel in the left-hand column that displays dates with active notices/events. Clicking a date should instantly filter the notice feed to show notices posted on that day.",
        "labels": ["ui", "low-priority"]
    },
    {
        "title": "Implement Google Auth OAuth2 Single Sign-On",
        "body": "Incorporate real login flows. Restrict admin privileges to verified college domain emails (e.g., `@aether.edu` or `@college.edu`) using Google OAuth2 integration.",
        "labels": ["security", "high-priority"]
    }
]

def create_issue(token, issue):
    url = f"https://api.github.com/repos/{REPO}/issues"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
    }
    
    data = json.dumps(issue).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            print(f"✔ Created Issue #{res_data.get('number')}: {issue['title']}")
    except urllib.error.HTTPError as e:
        print(f"✖ Failed to create issue '{issue['title']}': {e.code} - {e.reason}")
        print(e.read().decode('utf-8'))

def main():
    print(f"=== GitHub Issues Creator for {REPO} ===")
    print("This script will create 5 default issues on your GitHub repository.")
    print("To run this, you need a GitHub Personal Access Token (PAT) with 'repo' scope.")
    print("Generate one here: https://github.com/settings/tokens")
    print("-" * 50)
    
    token = input("Enter your GitHub Personal Access Token: ").strip()
    if not token:
        print("Token is required. Exiting.")
        return
        
    for issue in ISSUES:
        create_issue(token, issue)
        
if __name__ == "__main__":
    main()

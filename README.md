### Learning Support Directory

A responsive directory web app built with React + Vite + TypeScript, showcasing educational support providers. Users can search, browse, and view detailed info about each provider.

### 🚀 Features

- Search & Filter: Instantly find providers by name, expertise, or location.
- Provider Listings: Clean, card-based layout highlighting key details.
- Detail Pages: Full provider profile with description, contact info, services, and more.
- Responsive Design: Optimized for desktop, tablet, and mobile.

### 🧱 Tech Stack

- Vite – fast build tool
- React + TypeScript
- CSS Modules or Sass for styling
- Local data (providers.json) simulating an API backend

### 📁 Project Structure

```pgsql
/
├── public/           # Static HTML (index.html)
├── src/
│   ├── components/   # Reusable UI components
│   │   ├── ProviderCard.jsx
│   │   ├── ProviderList.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProviderDetail.jsx
│   ├── data/
│   │   └── providers.json
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/Mayurwagh98/learning-support-directory.git
cd learning-support-directory

# Install dependencies
npm install
```
### 🚧 Usage
- Run locally

```bash
npm run dev
```
- Open http://localhost:3000 in your browser to explore.

Build for production
```bash
npm run build
npm run serve
```

### 📚 Data Format
- Sample entry in providers.json:

```json
{
  "id": "1",
  "name": "ABC Tutoring Center",
  "location": "Pune, Maharashtra",
  "services": ["Math", "Science", "English"],
  "contact": {
    "phone": "123-456-7890",
    "email": "info@abctutors.com",
    "website": "https://abctutors.com"
  },
  "description": "Dedicated to helping students ace their exams."
}
```

- Add new providers by editing this JSON file — the app updates automatically on refresh.

### ✨ Customization
- Data Source: Replace providers.json with a live API endpoint.
- Styling: Tweak CSS modules or adopt a UI library like Material-UI or Tailwind.
- Routing: Easily extend to support additional pages or edit modes.

### ✅ Contributing
Contributions are welcome! Here's how:

- Fork the repository
- Create a feature branch: git checkout -b feat/my-feature
- Commit your changes: git commit -m 'Add my feature'
- Push to your branch: git push origin feat/my-feature
- Open a pull request
- Please follow the existing code style and include meaningful commit messages.

### 👍 Acknowledgements
- Built with Vite, React, and TypeScript
- Inspired by directories that empower access to educational resources
- Thanks to all contributors for their feedback and support!


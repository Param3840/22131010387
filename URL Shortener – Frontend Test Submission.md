A simple frontend web application that allows users to shorten URLs with optional custom shortcodes and expiry validity using React and Material UI. This project also demonstrates integration of a custom logging middleware that sends logs to a remote API.

🏗️PROJECT ARCHITECTURE :-
React-based SPA (Single Page Application)
Component-driven structure:
    ->Form component for input
    ->List component for showing shortened links
Logger utility used globally to track errors/info/debug messages

⚙️ TECH STACK :-
React (using Create React App)
JavaScript (ES6+)
Material UI (for design and layout)
Custom logger using fetch API
MUI components for styling

FOLDER STRUCTURE :-

frontend-test-submission/
├── public/
├── src/
│   ├── components/
│   │   ├── URLShortenerForm.jsx
│   │   └── ShortenedURLList.jsx
│   ├── utils/
│   │   └── logger.js     ← Logging middleware
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

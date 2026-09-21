# JS List Filter

A Vanilla JavaScript exercise for managing and filtering a user list in real time, with separate sections for regular users and administrators.

## Features

- **Complete user list** — display all available users
- **Administrators list** — dedicated section for users with admin privileges
- **Live search** — real-time filtering as you type in the search bar
- **Name filtering** — case-insensitive search on user names
- **"No users found" message** — visual feedback when there are no results
- **Dynamic DOM rendering** — instant UI updates without page reload

## Technologies

- **JavaScript** (Vanilla, ES Modules)
- **Vite** — build tool and dev server
- **HTML5** and **CSS3** — markup and styling
- **JSDoc** — code documentation

## Project Structure

```
js-list-filter/
├── index.html
├── package.json
├── src/
│   ├── main.js
│   ├── style.css
│   └── data/
│       └── data.js
└── README.md
```

## Installation

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Build

Generate the production build:

```bash
npm run build
```

Compiled files will be located in the `dist/` folder.

## JSDoc Documentation

The project uses JSDoc to document the code. To generate HTML documentation:

```bash
npm run goDoc
```

## Learning Goals

This project exercises the following JavaScript concepts:

- **Array methods** — `filter()` and `forEach()` for manipulating and iterating arrays
- **DOM manipulation** — dynamic creation and modification of HTML elements
- **Event handling** — input event listeners for handling user interactions
- **Dynamic rendering** — UI updates in response to changes
- **Reusable functions** — functions such as `renderUsers()` for rendering different user lists
- **ES Modules** — importing and exporting JavaScript modules

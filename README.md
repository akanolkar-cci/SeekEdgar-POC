# SeekEdgar Project Folder Structure

How to run the project
```javascript
npm i
```
and
```javascript
npm run dev
```
In the project, I have just set up the most used folder structure:

```javascript
SeekEdgar Project Folder Structure
.
├── public
├── src
    ├── assets
    |     ├── icons
    |     ├── images
    |     └── videos
    ├── components
    |     ├── Button
    |     |     ├── index.tsx
    |     |     └── button.module.css
    |	  ├── inputs
    |     |     ├── index.tsx
    |     |     └── inputs.module.css
    |	  ├── Modal
    |     |     ├── index.tsx
    |     |     └── modal.module.css
    |	  └── Tooltip
    |           ├── index.tsx
    |           └── tooltip.module.css
    |     └── index.ts
    ├── layout
    |     ├── Header
    |     |     ├── index.tsx
    |     |     └── header.module.css
    |     ├── Navbar
    |     |     ├── index.tsx
    |     |     └── navbar.module.css
    |     └── Footer
    |           ├── index.tsx
    |           └── footer.module.css
    |     └── index.ts
    ├── pages
    |     ├── Home
    |     |     ├── index.tsx
    |     |     └── home.module.css
    |     ├── Login
    |     |     ├── index.tsx
    |     |     └── login.module.css
    |     ├── Signup
    |     |     ├── index.tsx
    |     |     └── signup.module.css
    |     └── index.ts
    ├── services
    |     ├── apiInterceptor.ts          // API request functions
    |     └── authService.ts
    ├── styles
    |     ├── styles.css  
    ├── utils
    |     ├── constants
    |     |     ├── apiUrlConstants.ts
    |     |     └── commonConstant.ts
    |     |     └── index.ts
    |     └── hooks   
    |           └── useIsMobile.ts  
    ├── .env
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
|
├── .gitignore
├── next.env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Folders include

- `public`
- `assets`
- `components`
- `layout`
- `pages`
- `services`
- `utils`
  - `constants`
  - `hooks`
- `.env.example` / `.env.development`
- `next.env.d.ts`
- `next.config.mjs`
- `.gitignore`
- `package.json`
- `tailwind.config.js`
- `tsconfig.json`

### Assests

In Assets folder you can put following things.

- Icons
- Images
- Video

### Components

Component will have all the components which are reuseable anywhere in website. Like - Button - Cards - DropDownBtn - inputs - Modal - Popups - Toast - Tooltip - Text/Heading/Title - Skeleton - Spiner/Loader

### Layout

This is just a special folder for **placing any layout based components.**

- Header
- Footer
- Breadcrumbs
- Navbar
- Sidebar

### Pages

Pages will have all the pages which we will use in website.

### Services

In Services we put configuration file, like when you are using google firebase then your firebase config file will be in services folder.

The **"services"** folder is often used to contain code related to making **\*`API`** requests and managing data from external sources. This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI.

### Store
The "store" folder in a React application typically refers to a directory where you manage your application's state using state management libraries like 
- Redux 
- Redux Toolkit
- Mobx

```javascript
|-- store/
|   |-- actions.js        // Redux action creators
|   |-- reducers.js       // Redux reducers
|   |-- store.js          // Redux store configuration
```

### Utils

**`Utils`** folder is a common convention in many software projects, including React applications, for storing utility functions and helper modules that provide general-purpose functionality across different parts of the application. 
- constants
- helpers
- hooks

Example: 
```javascript
// utils/stringUtils.js
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// utils/dateUtils.js
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
```

### .env.development

Env files are used to store sensitive credentials such as API keys.

```javascript
REACT_APP_API_URL=http://localhost:3001
REACT_APP_DEBUG_MODE=true
```

### .env.example

Env files are used to store sensitive credentials such as API keys.

```javascript
REACT_APP_API_KEY=
REACT_APP_API_URL=
```

### .eslintrc.cjs

ESLint, which is a popular tool for linting and enforcing coding style and best practices in JavaScript code. The .eslintrc.cjs file is written in CommonJS module format and is used to configure ESLint for your project.

### .gitignore

.gitignore file contain all those files,folders name which user want to skip to push online. If you don't want to push any specific file/folder then you should put their name in .gitignore

### .prettierrc.cjs

`.prettierrc.cjs` file is a configuration file used for Prettier, which is a widely used code formatting tool. Prettier helps ensure consistent and automatic code formatting across your codebase. The `.prettierrc.cjs` file is written in CommonJS module format and is used to configure Prettier's behavior for your project.

- File Format & Naming
- Configuration Setup
- Export Configuration

```javascript
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
};
```

### tsconfig.json

- File Purpose
- Configuration Setup:
- JSON Format

```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### package.json

package.json file is core to the Nodejs ecosystem and is a fundamental part of understanding and working with Node. js , npm , and even modern JavaScript . This file is used as a manifest, storing information about applications, modules, packages, and more.

### tailwind.config.js

- File Purpose:
The tailwind.config.js file is used to configure Tailwind CSS, a utility-first CSS framework. It allows you to customize various aspects of Tailwind CSS such as colors, fonts, spacing, breakpoints, and more.

```javascript
// tailwind.config.js

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
```


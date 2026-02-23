# Learn-React

This repository is a learning playground for React built while following YouTube tutorials. It contains many small projects and experiments (Vite + React), each demonstrating a different concept or pattern.

Contents
- `01_React_Basics` — React fundamentals & small examples
- `02_counter` — Simple counter app (state and events)
- `03_Tailwind_props` — Tailwind CSS + Vite + React example
- `04_bg_changer` — Background color/image changer example
- `05_Random_password` — Random password generator
- `06_Currency_converter` — Currency converter with hooks and API
- `07_React_Router` — React Router examples (nested routes, Layout)
- `08_minicontext` — Mini Context API examples
- `09_theme_changer` — Theme toggle (light/dark) using Context + Tailwind
- `10_todo_context_localStorage` — Todo with Context + localStorage
- `11_ReduxToolkit_Todo` — Todo built using Redux Toolkit
- `12_Mega-Blog` — Blog-like project (in-progress)
- `CustomReact` — Custom React demo / toy implementation

Overview

Each folder is a standalone small project built with Vite + React. The main goal is to practice concepts: component composition, hooks, Context API, React Router, Tailwind CSS, and Redux Toolkit.

Quick start (global steps)

- Node.js: install Node LTS (>= 18 recommended)
- From PowerShell on Windows you may see a security error when running `npm` if script execution is restricted. See Troubleshooting -> PowerShell Execution Policy.

To run any example project:

1. Open a terminal and change to the project folder. Example:

```powershell
cd "C:\Users\<you>\OneDrive\Learn-React\03_Tailwind_props"
```

2. Install dependencies (if not already installed):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open the URL shown by Vite (usually `http://localhost:5173` or the fallback port it selects).

Notes on Windows PowerShell permissions

If you get an error like:

```
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system
```

Use one of these safe options:

- Temporarily bypass for a single command:

```powershell
PowerShell -ExecutionPolicy Bypass -Command "npm run dev"
```

- Call the `.cmd` shim directly:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run dev
```

- Set a safe persistent policy (applies to the current user only):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Get-ExecutionPolicy -List
```

Tailwind CSS notes

- Some projects in this repo use Tailwind. If Tailwind isn't generating utilities check that the project has a `postcss.config.cjs` or `postcss.config.js` with the proper plugin configured.
- Tailwind v4+ moved the PostCSS plugin into `@tailwindcss/postcss`. If you see an error complaining about using `tailwindcss` directly, install the new plugin and update `postcss.config.cjs`:

```powershell
npm install -D @tailwindcss/postcss
```

and a minimal `postcss.config.cjs` looks like:

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

Per-project highlights (what to look for)

- `01_React_Basics`
  - Intro exercises: components, props, JSX, simple state
- `02_counter`
  - Demonstrates `useState` and event handling
- `03_Tailwind_props`
  - Vite + Tailwind example. Check `tailwind.config.js` and `src/index.css` for `@tailwind` directives
- `04_bg_changer`
  - Dynamic inline styles and event-driven UI
- `05_Random_password`
  - DOM input handling and string generation logic
- `06_Currency_converter`
  - Custom hook for fetching currency rates and controlled inputs
- `07_React_Router`
  - Routing patterns: `Layout`, nested routes, `useParams`, route loaders
- `08_minicontext`
  - Small Context API examples to share state without prop drilling
- `09_theme_changer`
  - Theme toggling with Context and Tailwind dark classes. See `src/Context/theme.js`, `App.jsx`, and `Components/Themebtn.jsx` for the pattern.
- `10_todo_context_localStorage`
  - Todo app using Context and `localStorage` persistence
- `11_ReduxToolkit_Todo`
  - Todo example using Redux Toolkit (`createSlice`, `configureStore`). Wrap the app with `Provider` in `src/main.jsx` and use `useSelector`/`useDispatch` in components.
- `12_Mega-Blog`
  - Larger project scaffold (in-progress)
- `CustomReact`
  - A small custom React-like implementation or demo — useful to study how React primitives work.

Documentation & learning

I mentioned i learned React from YouTube — this repo captures those exercises. For next-level references use the official docs:

- React: https://react.dev/
- Vite: https://vite.dev/
- Tailwind CSS: https://tailwindcss.com/
- Redux Toolkit: https://redux-toolkit.js.org/
- React Router: https://reactrouter.com/

Troubleshooting checklist

- If the page is blank:
  - Open the browser console — check for JS errors.
  - Confirm `main.jsx` mounts into the `#root` element and the dev server started without build errors.
- If Tailwind classes are missing:
  - Make sure `@tailwind base; @tailwind components; @tailwind utilities;` are present in the imported CSS file.
  - Check `postcss.config.cjs` and `tailwind.config.js` `content` paths include `./index.html` and `./src/**/*.{js,jsx}`.
- If Redux hook errors occur ("could not find react-redux context value"):
  - Ensure `src/main.jsx` wraps `<App />` with `<Provider store={store}>`.
  - Verify the store exports the reducer correctly (`export default slice.reducer`) and `configureStore({ reducer: { key: reducer } })` uses the object shape.

## Happy Coding✨✨

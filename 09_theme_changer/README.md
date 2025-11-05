# Theme Changer Project

A React application that demonstrates theme switching functionality using Context API and Tailwind CSS. The project showcases how to implement a dark/light theme toggle with persistent theme state.

## 🌓 Features

- Toggle between light and dark themes
- Context API for theme state management
- Tailwind CSS for styling with dark mode support
- Responsive product card design
- Smooth theme transition effects
- Clean and modern UI

## 🛠️ Technical Implementation

### Theme Context

The theme functionality is implemented using React's Context API:

```jsx
// Context/theme.js
export const ThemeContext = createContext({
  themeMode: "light",
  LightTheme: () => {},
  darkTheme: () => {}
})
```

### Theme Toggle Component

A reusable toggle switch component that controls theme switching:

```jsx
const ThemeBtn = () => {
  const {themeMode, darkTheme, LightTheme} = useTheme()
  
  const onchangebtn = (e) => {
    e.currentTarget.checked ? darkTheme() : LightTheme()
  }
  // ... toggle button UI
}
```

### Theme Application

Themes are applied using Tailwind CSS classes and HTML class toggling:

```jsx
useEffect(() => {
  document.querySelector('html').classList.remove("dark", "light")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

## 🎨 Styling Features

1. **Tailwind Dark Mode**
   - Uses Tailwind's dark mode utilities
   - Example: `dark:bg-gray-800 dark:text-white`

2. **Responsive Design**
   - Fluid layouts with Flexbox
   - Mobile-first approach
   - Centered content with max-width constraints

3. **Interactive Elements**
   - Hover effects on buttons
   - Focus states for accessibility
   - Smooth transitions

## 📦 Project Structure

```
src/
├── Components/
│   ├── Card.jsx        # Product card component
│   └── ThemeBtn.jsx    # Theme toggle button
├── Context/
│   └── theme.js        # Theme context and provider
├── App.jsx             # Main application component
└── index.css          # Global styles and Tailwind imports
```

## 🧰 Technologies Used

- React 19.1
- Tailwind CSS
- React Context API
- Vite (Build tool)

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## 💡 Key Features Explained

### 1. Theme Context Provider
- Wraps the application to provide theme context
- Manages theme state and toggle functions
- Makes theme functions available throughout the app

### 2. Theme Toggle Button
- Custom-styled toggle switch
- Uses `useTheme` hook to access context
- Smooth transition between themes

### 3. Product Card
- Responsive product display
- Dark/light mode compatible
- Rating system with star icons
- Price and action button

### 4. Tailwind Integration
- Custom color schemes for both themes
- Utility-first CSS approach
- Dark mode classes with `dark:` prefix

## 📝 Learning Points

- Context API for global state management
- Tailwind CSS dark mode configuration
- React hooks (useState, useEffect, useContext)
- Component composition
- CSS transitions and transforms
- Responsive design principles

## 🔍 Additional Resources

- [React Context API Documentation](https://react.dev/reference/react/useContext)
- [Tailwind CSS Dark Mode Guide](https://tailwindcss.com/docs/dark-mode)
- [React Hooks Documentation](https://react.dev/reference/react/hooks)

## 🎯 Future Enhancements

1. Theme persistence in localStorage
2. Multiple color schemes
3. Animation during theme transition
4. Custom theme configuration
5. System theme detection
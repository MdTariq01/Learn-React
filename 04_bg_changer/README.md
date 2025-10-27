# Today's Lesson

## 🎨 Background Changer App

A simple React + Tailwind CSS project that allows users to change the background color of the screen with just one click.  
It’s a great mini-project for learning **React state management (useState)** and **Tailwind CSS styling**.

---

## 🚀 Features
- 🖱️ Click any color button to instantly change the background.
- 🎨 Smooth and clean UI built with **Tailwind CSS**.
- ⚡ Fully responsive design.
- 🧠 Uses React’s `useState` hook to manage dynamic background colors.

---

## 🧩 Tech Stack
- **React (Vite)**
- **Tailwind CSS**
- **JavaScript (ES6)**

---

## 💡 How It Works

The app uses React’s useState hook:

```bash
const [color, setColor] = useState('olive')
```

Each button changes the state using:

```bash
onClick={() => setColor("red")}
```

The background color of the main div updates automatically based on the color state:

```bash
style={{ backgroundColor: color }}
```

## 🧠 Why We Use useState

In React, components can re-render whenever their **state** changes.  
The `useState` hook allows us to **create and manage state variables** inside functional components.

In this project, we use `useState` to **store and update the background color** dynamically.

### Example:
```js
const [color, setColor] = useState('olive')
```
- color → stores the current background color.
- setColor → updates the color when a button is clicked.
- 'olive' → the default background color when the app loads

When a user clicks a button, we call:

```js
onClick={() => setColor("red")}
```

Author - Tariq
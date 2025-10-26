## Today Lesson

Learned about many things today like how to import tailwind in react project <br>
Also, learned about components and props and like how it works internally it's default values and all

# 🧩 React Props & Component Reusability

## 1. What are Components in React?

Components are **reusable, independent pieces of UI** — like building blocks.

They can be:
- **Functional Components** (most common)
- **Class Components** (older style)

Example:
```jsx
function Button() {
  return <button>Click Me</button>;
}

✅ This can be reused anywhere by writing <Button />.

```

## 2. What are Props?

**Props (short for “properties”)** are used to **pass data from one component to another**, usually **from parent to child**.

They make components **dynamic and reusable**.

### 🧩 Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Tariq" />

🔍 Explanation:
- name → prop
- "Tariq" → value
- props.name → accessing it
```

# Props Destructuring

Instead of writing props.name, we can destructure it:

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

# Component Reusability

You can reuse the same component with different props:

```jsx
function UserCard({ name, age }) {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Reusing
<UserCard name="Tariq" age={20} />
<UserCard name="Aisha" age={22} />

```
✅ React reuses the same structure but fills it with different data.

# Default Props (Default Values)

If a prop is not passed, React can use a default value.

✅ Method 1: Using defaultProps

```jsx 
function Button({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}

Button.defaultProps = {
  label: "Click Me",
  color: "blue",
};

```
Usage:
```jsx
<Button />  // uses default label="Click Me" and color="blue"
<Button label="Submit" color="green" />  // overrides defaults
```

✅ Method 2: Default Value via Destructuring
```jsx
function Button({ label = "Click", color = "gray" }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}

🧠 This is the modern and cleaner way.
```

# Props Are Read-Only

Props cannot be changed inside the child component.

```jsx
props.name = "Changed"; // Error
```
✅ Right:
If you want to change data, use state in the parent and pass updated data as props.

# Passing Functions as Props

Props can also carry functions, allowing child components to trigger actions in parent components.

```jsx
function Parent() {
  const showAlert = () => alert("Button clicked!");

  return <Child onButtonClick={showAlert} />;
}

function Child({ onButtonClick }) {
  return <button onClick={onButtonClick}>Click Me</button>;
}
```

## Key Takeaways

| **Concept**       | **Description**                              |
|--------------------|----------------------------------------------|
| **Props**          | Data passed from parent → child              |
| **Read-only**      | Cannot be modified inside child              |
| **Default Props**  | Fallback values for missing props            |
| **Reusability**    | Same component used with different data      |
| **PropTypes**      | Type checking for props                      |
| **Destructuring**  | Cleaner access to props                      |

# 🪄 Quick Recap

- Props make components dynamic & reusable
- They are read-only
- Use default values to avoid missing data
- You can pass functions as props
- Use PropTypes for type safety
- Destructure for cleaner code

# ✨ In short:

Components become truly powerful when combined with props — allowing flexibility, reusability, and maintainability in React apps.
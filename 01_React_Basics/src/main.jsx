import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Creating a React element manually (without JSX)
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click here to go to Google"
);
const anotherelement = (
  <a href="https://google.com"> click here</a>
)

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    {reactElement}
    {anotherelement}
  </>
);

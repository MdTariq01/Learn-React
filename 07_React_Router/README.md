# React Router Project

This project demonstrates the implementation of client-side routing in a React application using React Router v6. It showcases various routing features including nested routes, dynamic routes, and data loading.

## Features

- Navigation bar with active link highlighting
- Nested route layouts with header and footer
- Dynamic routes with URL parameters
- Data loading with route loaders
- Responsive design with Tailwind CSS

## Concepts Used

### React Router Basics

1. **BrowserRouter Setup**
   - Uses HTML5 history API
   - Created using `createBrowserRouter`
   - Wrapped with `RouterProvider`

2. **Route Types**
   ```jsx
   <Route path='/' element={<Layout />}>
     <Route path='' element={<Home />} />              // Index route
     <Route path='about' element={<AboutUs />} />      // Static route
     <Route path='user/:userid' element={<User />} />  // Dynamic route
   </Route>
   ```

3. **Route Parameters**
   ```jsx
   // Using URL parameters
   const {userid} = useParams();
   ```

### Components Structure

1. **Layout Component**
   - Acts as a wrapper component
   - Uses `Outlet` for nested route rendering
   - Provides consistent header and footer

2. **Navigation**
   - Uses `Link` component for client-side navigation
   - Prevents full page reloads
   - Example: `<Link to="/about">About</Link>`

3. **Dynamic Routes**
   - User profile pages with dynamic IDs
   - Github data loading with loaders

## 🛠️ Technical Implementation

### Route Configuration

Two ways to configure routes are demonstrated:

1. **Object-based Configuration**
   ```jsx
   const router = createBrowserRouter([
     {
       path: '/',
       element: <Layout/>,
       children: [
         {
           path: "",
           element: <Home />
         }
         // ... more routes
       ]
     }
   ])
   ```

2. **JSX Configuration** (Currently used)
   ```jsx
   const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path='/' element={<Layout />}>
         <Route path='' element={<Home />} />
         // ... more routes
       </Route>
     )
   )
   ```

### Key Features Implementation

1. **Layout Pattern**
   - Header stays consistent across routes
   - Content changes via `<Outlet />`
   - Footer remains fixed

2. **Dynamic User Routes**
   - Pattern: `/user/:userid`
   - Parameters accessed via `useParams()`

3. **Data Loading**
   - Github component uses loader function
   - Data preloaded before component renders

## 🎨 Styling

The project uses Tailwind CSS for styling with classes like:
- `mx-auto` for center alignment
- `text-{size}` for font sizes
- `bg-{color}` for backgrounds
- `p-{size}` for padding
- Responsive classes with `sm:`, `md:` prefixes

## 📦 Project Structure

```
src/
├── Components/
│   ├── AboutUs/
│   ├── ContactUs/
│   ├── Footer/
│   ├── Github/
│   ├── Header/
│   └── Home/
├── User/
├── Layout.jsx
└── main.jsx
```

## 🧰 Tools & Technologies

- React v19.1
- React Router v6
- Tailwind CSS
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

## 📝 Key Learnings

- Client-side routing implementation
- Route organization and nesting
- Dynamic route parameters
- Data loading strategies
- Layout patterns in React
- Component composition
- URL parameter handling

## 🔍 Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)

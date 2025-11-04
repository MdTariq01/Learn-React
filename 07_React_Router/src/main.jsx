import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './User/User.jsx'
import Github, { githubinfoLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <AboutUs />
//       },
//       {
//         path: "contact",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route path='' element= {<Home />}></Route>
      <Route path='about' element= {<AboutUs />}></Route>
      <Route path='contact' element= {<ContactUs />}></Route>
      <Route path='user/:userid' element= {<User />}></Route>
      <Route loader= {githubinfoLoader}
      path='github' 
      element= {<Github />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

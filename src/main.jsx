import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roote from './Components/Roote/Roote.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Update from './Components/Update/Update.jsx';
import Addcoffe from './Components/Addcoffe/Addcoffe.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roote></Roote>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/update/:id",
        element:<Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/coffe/${params.id}`)
      },
      {
        path: "/addcofe",
        element:<Addcoffe></Addcoffe>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

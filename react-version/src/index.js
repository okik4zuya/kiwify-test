import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
      <p>Home</p>
      <p>
        <Link to="/login">Go to Login Page</Link>
      </p>
      <p>
        <Link to="/signup">Go to Signup Page</Link>
      </p>
    </div>)
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


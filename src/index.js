import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Product from './components/Product.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "product", element: <Product /> }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <ThemeProvider>
  <RouterProvider router={myRoutes} />
  </ThemeProvider>
);
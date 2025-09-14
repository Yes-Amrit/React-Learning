import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function ErrorPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>⚠️ Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back Home</a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: "github", 
        element: <Github />,
        loader: async () => {
          try {
            const response = await fetch("https://api.github.com/users/Yes-Amrit");
            if (!response.ok) throw new Error("Failed to fetch");
            return response.json();
          } catch (err) {
            console.error(err);
            return { error: err.message };
          }
        } 
      },
      { path: "user/:userId", element: <User /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)

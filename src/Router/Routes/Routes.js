import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About/About";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import ProjectDetails from "../../Pages/ProductDetails/ProductDetails/ProductDetails";
import Register from "../../Pages/Register/Register/Register";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
          {
            path: '/', 
            element: <Home></Home>, 
            loader: ()=>fetch('https://assianment-protfolio-server.vercel.app/product')
          },
          {
            path: '/aboutUs', element: <About></About>
          },
          {
            path: '/blog', element: <Blog></Blog>
          },
          {
            path: '/product/:id', 
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params})=>fetch(`https://assianment-protfolio-server.vercel.app/product/${params.id}`)
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          }
          
        ]
       }
  
])

export default router;
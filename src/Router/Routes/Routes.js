import Main from "../../Layout/Main/Main";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/ProductDetails/ProductDetails/ProductDetails";


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
            path: '/product/:id', 
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params})=>fetch(`https://assianment-protfolio-server.vercel.app/product/${params.id}`)
          }
          
        ]
       }
  
])

export default router;
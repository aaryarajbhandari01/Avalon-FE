// import logo from './logo.svg';
import './App.css';
import { 
      createBrowserRouter, 
      RouterProvider, 
      Outlet} from "react-router-dom"; //rect router v6

//component
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//pages
// import Home from './pages/Home/Home';
// import Product from './pages/Product/Product';
// import Products from './pages/Products/Products';
// import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout'; 
import {Home, Cart, CartPage, CategoryProducts, SingleProduct, Products} from "../src/pages/index"
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Profile from './pages/Profile/Profile';
import Shipping from './pages/Shipping/Shipping';
import Payment from './pages/Payment/Payment';



// creating a layout to call the components
const Layout =() => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet /> {/* represents different pages */}
      <Footer/>
    </div>
  )
}

// Creating the router array
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, //calling Layout and childrens of the layout
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/myCart",
        element:<Cart/>
      },
      {
        path: "/register", 
        element: <Register/>,
      },
      {
        path: "/products", //product list and category select page
        element: <Products/>,
      },
      {
        path: "/products/:id", //product list and category id
        element: <Products/>,
      },
      {
         path: "/singleproduct/:id", //product detail single page
        element: <SingleProduct/>,
      },
    //   {
    //     path: "/checkout", 
    //    element: <Checkout/>,
    //  },
     {
      path: "/shipping", 
     element: <Shipping/>,
   },
   {
    path: "/payment", 
   element: <Payment/>,
 },
    {
      path: "/profile", 
     element: <Profile/>,
   },
     {
      path:"*", 
     element: <ErrorPage/>,
   }
    ]
  },
  // {
  //   path: "/products/:id", //product list and category id
  //   element: <Products/>,
  // },
  // {
  //   path: "/product/:id", //product detail single page
  //   element: <Product/>,
  // }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

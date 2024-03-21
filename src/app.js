import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Error from "../Components/Error";
import RestaurantMenu from "../Components/RestaurantMenu";
import { createBrowserRouter, Router, RouterProvider,Outlet } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Bag from "../Components/Bag";
import { Auth0Provider } from '@auth0/auth0-react';
// import Grocery from "../Components/Grocery";
const Grocery=lazy(()=>import("../Components/Grocery"))
const AppLayout=()=>{
   const [userName,setUserName]=useState();
   useEffect(()=>{
       const data={
         name:"Aman Yadav"
       }
       setUserName(data.name)
   },[])
   return (
      <div className="app">
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userName,setUserName}}>
         <Header/>
         <Outlet/>
        </userContext.Provider>
        </Provider>
      </div>
   )
}
const AppRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/about",
            element:<About/>,
         },
         {
            path:"/contact",
            element:<Contact/>,
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
         },
         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
         },
         {
            path:"/cart",
            element:<Bag/>
         }
      ],
      errorElement:<Error/>
   },   
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Auth0Provider
   domain="dev-4e3n5kimwgmbosgw.us.auth0.com"
   clientId="TdN0qFbz8pa6WjM1YLqcgtgfYxbDnMsm"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}
 >
   <RouterProvider router={AppRouter}/>
 </Auth0Provider>
  )

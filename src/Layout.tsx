import  React from "react";
import { Header } from "./component/Header/Header"
import { Footer } from "./component/Footer/Footer"
import { Outlet } from "react-router";


export const Layout = () => {
    return ( 
        <>
        <Header/>
        <main className="container"><Outlet/></main>
        <Footer/>
        </>
    )
}

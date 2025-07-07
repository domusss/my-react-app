import  React from "react";
import { Header } from "./component/Header/Header"
import { Footer } from "./component/Footer/Footer"
import { Outlet } from "react-router";
import { Preloader } from "./component/Preloader/Preloader";


export const Layout = () => {
    return ( 
        <>
        <Preloader/>
        <Header/>
        <main className="container"><Outlet/></main>
        <Footer/>
        </>
    )
}

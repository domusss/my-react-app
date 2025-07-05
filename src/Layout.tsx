import  React from "react";
import { Header } from "./component/Header/Header"
import { Footer } from "./component/Footer/Footer"

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return ( 
        <>
        <Header/>
        <main className="container">{children}</main>
        <Footer/>
        </>
    )
}

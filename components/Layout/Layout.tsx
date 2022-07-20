import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import SideMenu from "../Menu/SideMenu";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex w-full h-[200vh]">
            <div className="min-w-[12%]">
                <div className="fixed w-[12%] h-screen bg-neutral-800 border-r border-zinc-900">
                    <SideMenu />
                </div>
            </div>
            <div className="flex-grow">
                <Menu />
                {children}
            </div>
        </div>
    );
};

export default Layout;

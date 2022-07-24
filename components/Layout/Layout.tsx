import {
    CashIcon,
    HomeIcon,
    PencilAltIcon,
    PresentationChartLineIcon,
    UserCircleIcon,
    ViewGridAddIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import Logo from "../Icons/Logo";
import SideMenu from "../Menu/SideMenu";
import SideMenuItem from "../Menu/SideMenuItem";
import Switch from "../Switch/Switch";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    const [logoColor, setLogoColor] = useState<string | undefined>("");

    const { theme, setTheme } = useTheme();

    useEffect(() => setLogoColor(theme), [theme]);

    return (
        <div className="flex w-full max-w-[100vw] h-[200vh]">
            {/* <div className="absolute top-0 -right-40">
                <Image
                    src="/images/bg-gradient-mesh.png"
                    alt=""
                    width={800}
                    height={800}
                    className="opacity-50"
                />
            </div> */}
            <div className="w-1/6 max-h-screen">
                <div className="fixed top-0 left-0 flex flex-col w-1/6 h-screen border-r p-7 dark:border-black-600 dark:bg-black-700 bg-neutral-50">
                    <div className="flex">
                        <Logo
                            fill={logoColor === "dark" ? "white" : "black"}
                            width={4}
                            height={4}
                        />
                    </div>
                    <SideMenu />
                    <div>
                        <Switch />
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;

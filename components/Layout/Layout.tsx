import {
    CashIcon,
    HomeIcon,
    PencilAltIcon,
    PresentationChartLineIcon,
    UserCircleIcon,
    ViewGridAddIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React, { ReactNode } from "react";
import Logo from "../Icons/Logo";
import SideMenuItem from "../Menu/SideMenuItem";
import Switch from "../Switch/Switch";

interface Props {
    children?: ReactNode;
}

const MenuItems = [
    {
        title: "Home",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        title: "Products",
        icon: <ViewGridAddIcon className="w-6 h-6" />,
    },
    {
        title: "Customers",
        icon: <UserCircleIcon className="w-6 h-6" />,
    },
    {
        title: "Orders",
        icon: <PencilAltIcon className="w-6 h-6" />,
    },
    {
        title: "Income",
        icon: <CashIcon className="w-6 h-6" />,
    },
    {
        title: "SEO/SEM",
        icon: <PresentationChartLineIcon className="w-6 h-6" />,
    },
];

const Layout = ({ children }: Props) => {
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
                <div className="fixed top-0 left-0 flex flex-col w-1/6 h-screen border-r p-7 border-black-600 dark:bg-black-700 bg-neutral-100">
                    <div className="flex">
                        <Logo fill="white" width={4} height={4} />
                    </div>
                    <div className="flex-grow pt-8 space-y-7">
                        {MenuItems.map((item: any, index: number) => (
                            <SideMenuItem
                                key={index}
                                delay={index / 4}
                                text={item.title}
                                icon={item.icon}
                            />
                        ))}
                    </div>
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

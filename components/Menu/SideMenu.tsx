import {
    CashIcon,
    HomeIcon,
    PencilAltIcon,
    PresentationChartLineIcon,
    UserCircleIcon,
    ViewGridAddIcon,
} from "@heroicons/react/outline";
import React from "react";
import SideMenuItem from "./SideMenuItem";

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

const SideMenu = () => {
    return (
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
    );
};

export default SideMenu;

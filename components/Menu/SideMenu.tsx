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
        link: "/admin",
    },
    {
        title: "Products",
        icon: <ViewGridAddIcon className="w-6 h-6" />,
        link: "/admin/products",
    },
    {
        title: "Customers",
        icon: <UserCircleIcon className="w-6 h-6" />,
        link: "/admin/customers",
    },
    {
        title: "Orders",
        icon: <PencilAltIcon className="w-6 h-6" />,
        link: "/admin/orders",
    },
    {
        title: "Income",
        icon: <CashIcon className="w-6 h-6" />,
        link: "/admin/income",
    },
    {
        title: "SEO/SEM",
        icon: <PresentationChartLineIcon className="w-6 h-6" />,
        link: "/admin/seo",
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
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default SideMenu;

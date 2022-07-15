import {
    ChartSquareBarIcon,
    HomeIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import { link } from "fs";
import React from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
    return (
        <aside className="flex flex-col items-center pt-4 space-y-5">
            <SideMenuItem
                text="Home"
                icon={<HomeIcon className="w-6 h-6" />}
                link="#"
            />
            <SideMenuItem
                text="Products"
                icon={
                    <ShoppingBagIcon className="w-6 h-6" />
                }
                link="#"
            />
            <SideMenuItem
                text="Customers"
                icon={<UserGroupIcon className="w-6 h-6" />}
                link="#"
            />
            <SideMenuItem
                text="Income"
                icon={
                    <ChartSquareBarIcon className="w-6 h-6" />
                }
                link="#"
            />
        </aside>
    );
};

export default SideMenu;

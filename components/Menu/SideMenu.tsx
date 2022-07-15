import { HomeIcon } from "@heroicons/react/outline";
import React from "react";

const SideMenu = () => {
    return (
        <aside className="flex flex-col items-center pt-4">
            <div className="flex items-center justify-between w-4/5 px-4 py-2 duration-150 border rounded-lg shadow-md cursor-pointer hover:-translate-y-1 hover:border-sky-700">
                <div>
                    <HomeIcon className="w-6 h-6" />
                </div>
                <span>Dashoboard</span>
            </div>
        </aside>
    );
};

export default SideMenu;

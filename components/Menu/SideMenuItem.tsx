import Link from "next/link";
import React from "react";

interface SideMenuItemsProps {
    link: string;
    icon: React.ReactElement;
    onClick?: () => void;
    text: string;
}

const SideMenuItem = ({
    text,
    link,
    icon,
    onClick,
}: SideMenuItemsProps) => {
    return (
        <Link className="block w-full" href={link}>
            <a className="w-4/5 mx-auto">
                <div className="flex items-center justify-start w-full px-4 py-2 space-x-8 duration-150 border rounded-lg shadow-md cursor-pointer hover:-translate-y-1 hover:border-sky-700">
                    <div>{icon}</div>
                    <span>{text}</span>
                </div>
            </a>
        </Link>
    );
};

export default SideMenuItem;

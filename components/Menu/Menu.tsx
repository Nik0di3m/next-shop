import React from "react";
import { signOut, useSession } from "next-auth/react";
import Input from "../Input/Input";

const Menu = () => {
    const { data } = useSession();
    console.log(data);
    return (
        <header className="sticky top-0 flex items-center justify-between h-20 px-3 py-4 bg-neutral-800">
            <div>
                <Input placeholder="Enter search term..." />
            </div>
            <div className="flex items-center space-x-10">
                <div className="flex items-center space-x-5">
                    <div className="w-10 h-10 rounded-full cursor-pointer bg-zinc-600 outline-2 outline-green-700 outline"></div>
                    <span className="text-sm">
                        {data?.user?.name}
                    </span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="px-3 py-2 duration-150 bg-red-900 rounded-md shadow-lg shadow-red-600/60 hover:scale-105 active:scale-75"
                >
                    <span className="text-sm">
                        Sign Out
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Menu;

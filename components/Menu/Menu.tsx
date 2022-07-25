import { useSession } from "next-auth/react";
import React from "react";
import AdminAvatar from "../Avatar/AdminAvatar";

const Menu = () => {
    const { data: session, status } = useSession();

    return (
        <div className="sticky top-0 z-50 flex items-center justify-between flex-grow h-20 px-3 border-b bg-neutral-50 dark:bg-black-700 dark:border-black-600">
            <div>
                <input
                    placeholder="Serach terms..."
                    className="h-10 duration-150 bg-transparent border-b outline-none focus:border-pink-600"
                    type="text"
                />
            </div>
            <AdminAvatar
                name={session?.user?.name}
                image={session?.user?.image}
            />
        </div>
    );
};

export default Menu;

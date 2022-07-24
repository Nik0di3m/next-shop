import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import AdminAvatar from "../Avatar/AdminAvatar";
import Logo from "../Icons/Logo";
import SideMenu from "../Menu/SideMenu";
import Switch from "../Switch/Switch";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    const [logoColor, setLogoColor] = useState<string | undefined>("");

    const { theme, setTheme } = useTheme();

    const { data: session, status } = useSession();

    useEffect(() => setLogoColor(theme), [theme]);

    return (
        <div className="flex h-[300vh]">
            <div className="sticky top-0 left-0 flex flex-col w-1/6 h-screen border-r p-7 dark:border-black-600 dark:bg-black-700 bg-neutral-50">
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

            <div className="w-full">
                <div className="sticky top-0 flex items-center justify-between flex-grow h-20 px-3 border-b bg-neutral-50 dark:bg-black-700 dark:border-black-600">
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
                <div className="py-8 px-4 mt-10 rounded-lg max-w-[1380px] dark:bg-black-700 bg-neutral-50 border dark:border-black-600 w-full mx-auto shadow-lg dark:shadow-pink-900/30">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;

import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import Logo from "../Icons/Logo";
import LogoMobile from "../Icons/LogoMobile";
import Menu from "../Menu/Menu";
import SideMenu from "../Menu/SideMenu";
import Switch from "../Switch/Switch";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    const [logoColor, setLogoColor] = useState<string | undefined>("");

    const { theme, setTheme } = useTheme();

    useEffect(() => setLogoColor(theme), [theme]);

    return (
        <div className="flex min-h-[300vh]">
            <div className="sticky top-0 left-0 flex flex-col items-center h-screen border-r 2xl:items-start 2xl:w-1/6 2xl:p-7 py-7 dark:border-black-600 dark:bg-black-700 bg-neutral-50">
                <div className="hidden 2xl:flex">
                    <Logo
                        fill={logoColor === "dark" ? "white" : "black"}
                        width={4}
                        height={4}
                    />
                </div>
                <div className="flex 2xl:hidden">
                    <LogoMobile width={4} height={4} />
                </div>
                <SideMenu />
                <div>
                    <Switch />
                </div>
            </div>

            <div className="w-full pb-8">
                <Menu />
                <div className="px-4">
                    <div className="py-8 mt-10 rounded-lg max-w-[1380px] dark:bg-black-700 bg-neutral-50 border dark:border-black-600 w-full mx-auto shadow-lg dark:shadow-pink-900/30">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;

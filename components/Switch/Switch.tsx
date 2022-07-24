import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";

const Switch = () => {
    const [themeVariants, setThemeVariants] = useState<string | undefined>("");

    const router = useRouter();

    const { theme, setTheme } = useTheme();

    const controlAnimation = useAnimation();

    const themeHendler = (value: string) => {
        setTheme(value);
    };

    // HotFix bug with border color SideMenuItem hover state after change theme
    const handleSetTheme = () => {
        router.reload();
    };

    const animationVariant = {
        initial: {
            x: 0,
        },
        animate: {
            x: 69,
        },
    };

    useEffect(() => {
        setThemeVariants(theme);

        switch (theme) {
            case "dark":
                controlAnimation.start("animate");
                break;

            case "light":
                controlAnimation.start("initial");
                break;
            default:
                break;
        }
    }, [theme]);

    return (
        <div
            onClick={() => handleSetTheme()}
            className="relative z-20 flex justify-between px-2 py-2 mx-auto border rounded-full shadow-inner w-28 border-neutral-300 dark:border-black-500 dark:shadow-white/5"
        >
            <div onClick={() => themeHendler("light")}>
                <SunIcon
                    className={` ${
                        themeVariants !== "light" && "cursor-pointer "
                    } z-20 w-6 h-6`}
                />
            </div>
            <div onClick={() => themeHendler("dark")}>
                <MoonIcon
                    className={` ${
                        themeVariants !== "dark" && "cursor-pointer "
                    } z-20 w-6 h-6`}
                />
            </div>
            <motion.div
                initial="initial"
                animate={controlAnimation}
                variants={animationVariant}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-10 h-10 bg-pink-500 rounded-full shadow-inner shadow-pink-100/5 -z-10"
            ></motion.div>
        </div>
    );
};

export default Switch;

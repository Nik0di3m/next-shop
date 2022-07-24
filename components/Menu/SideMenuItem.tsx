import { HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface SideMenuItemsProps {
    link: string;
    icon?: React.ReactElement;
    onClick?: () => void;
    text?: string;
    delay: number;
}

const SideMenuItem = ({
    text,
    link,
    icon,
    delay,
    onClick,
}: SideMenuItemsProps) => {
    const controls = useAnimation();

    const animation = {
        initial: {
            x: -80,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: delay,
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const hoverAnimation = {
        y: -5,
        borderColor: "rgb(219, 39, 119)",
        transition: {
            type: "spring",
            velocity: 5,
            duration: 0.4,
        },
    };

    useEffect(() => {
        controls.start("animate");
    }, []);

    return (
        <div>
            <Link className="block" href={link}>
                <a>
                    <motion.div
                        variants={animation}
                        initial="initial"
                        animate={controls}
                        whileHover={hoverAnimation}
                        tabIndex={0}
                        className="flex items-center py-2 pl-10 space-x-8 border rounded-lg shadow-md cursor-pointer dark:border-black-500 border-neutral-300"
                    >
                        {icon}
                        <span className="text-lg font-medium">{text}</span>
                    </motion.div>
                </a>
            </Link>
        </div>
    );
};

export default SideMenuItem;

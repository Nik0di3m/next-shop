import { motion, useAnimation } from "framer-motion";
import React, { FC, useEffect } from "react";

interface ILogoMobileIcon {
    width?: number;
    height?: number;
}

const LogoMobile: FC<ILogoMobileIcon> = ({ width, height }) => {
    const controlTriangle = useAnimation();

    const variants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
    };

    useEffect(() => {
        controlTriangle.start("animate");
    }, []);

    return (
        <motion.svg
            variants={variants}
            initial="initial"
            animate={controlTriangle}
            transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
            }}
            viewBox="0 0 175 200"
            width={`${width ? 175 / width : "175"}`}
            height={`${height ? 200 / height : "200"}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M171 106.351c4.889-2.823 4.889-9.88 0-12.702l-46.485-26.838c-2.355-1.36-5.372-.145-6.823 2.154-1.548 2.45-1.172 5.932 1.338 7.381l15.258 8.81c6.722 3.88 10.083 5.82 11.626 8.083a12.001 12.001 0 0 1 0 13.522c-1.543 2.262-4.904 4.203-11.626 8.084L40.3 169.109c-9.451 5.456-14.177 8.185-18.054 7.777a11.996 11.996 0 0 1-8.454-4.881c-2.292-3.154-2.292-8.611-2.292-19.524v-19.248c0-1.993-1.38-3.722-3.234-4.453-3.418-1.348-7.766.915-7.766 4.588v58.719c0 5.646 6.111 9.174 11 6.351L171 106.351ZM.5 64.631c0 3.674 4.348 5.937 7.766 4.589 1.854-.731 3.234-2.46 3.234-4.454V47.52c0-10.913 0-16.37 2.292-19.524a12 12 0 0 1 8.454-4.881c3.877-.408 8.603 2.32 18.054 7.777l33.107 19.114c2.51 1.45 5.743-.042 7.106-2.6 1.277-2.398.777-5.55-1.577-6.909L11.5 1.562C6.611-1.261.5 2.267.5 7.912v56.72Z"
                fill="url(#a)"
            />
            <defs>
                <linearGradient
                    id="a"
                    x1={10.745}
                    y1={51.859}
                    x2={162.664}
                    y2={122.021}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="red" />
                    <stop offset={1} stopColor="#FF00F5" />
                </linearGradient>
            </defs>
        </motion.svg>
    );
};

export default LogoMobile;

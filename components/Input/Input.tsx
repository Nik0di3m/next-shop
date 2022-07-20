import {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { motion, useAnimation } from "framer-motion";
import { checkEmptyString } from "../../utils/helpers";
type IInput = {
    type?: "text" | "password";
    value: string;
    name?: string;
    id?: string;
    placeholder: string;
    onClick?: () => void;
    onChange: (values: string) => void;
};

const Input: FC<IInput> = ({
    type,
    onChange,
    placeholder,
    name,
    id,
    value,
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const animationControls = useAnimation();

    const variants = {
        initial: {
            y: 25,
            color: "rgb(243, 244, 246)",
        },
        animate: {
            y: 0,
            color: "rgb(255, 122, 210)",
        },
    };

    const handleBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
        checkEmptyString(e.target.value) && animationControls.start("initial");
    };

    useEffect(() => {
        checkEmptyString(value) && animationControls.start("initial");
    }, [value]);

    return (
        <div>
            <motion.label
                variants={variants}
                initial="initial"
                animate={animationControls}
                htmlFor={id}
                className="block px-3"
            >
                {placeholder}
            </motion.label>

            <input
                className="w-full px-3 py-1 duration-150 bg-transparent border-b outline-none focus:border-pink-400 placeholder:text-transparent"
                type={type || "text"}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => animationControls.start("animate")}
                onBlur={(e) => handleBlurInput(e)}
            />
        </div>
    );
};

export default Input;

import React, { useState } from "react";
import {
    EyeIcon,
    EyeOffIcon,
} from "@heroicons/react/outline";
type InputProps = {
    type?: "text" | "password";
    placeholder?: string;
    onClick?: () => void;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
};

const Input = ({
    type,
    onChange,
    placeholder,
}: InputProps) => {
    const [showPassword, setShowPassword] =
        useState<boolean>(false);

    if (type === "password") {
        return (
            <div
                tabIndex={-1}
                className="w-full px-3 py-2 duration-150 bg-transparent border rounded-md shadow-md outline-none focus-within:border-sky-700 focus-within:-translate-y-1"
            >
                <label className="flex items-center">
                    <input
                        className="w-full bg-transparent outline-none"
                        type={`${
                            showPassword
                                ? "text"
                                : "password"
                        }`}
                        placeholder="Enter your password"
                        name=""
                        id=""
                        onChange={onChange}
                    />
                    <div
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        {showPassword ? (
                            <EyeOffIcon className="w-5 h-5" />
                        ) : (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </div>
                </label>
            </div>
        );
    } else {
        return (
            <label>
                <input
                    className="w-full px-3 py-2 duration-150 bg-transparent border rounded-md shadow-md outline-none focus:border-sky-700 focus:-translate-y-1"
                    type="text"
                    placeholder={placeholder}
                    name=""
                    id=""
                    onChange={onChange}
                />
            </label>
        );
    }
};

export default Input;

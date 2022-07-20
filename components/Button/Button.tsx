import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

interface IButton {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: "submit" | "reset" | "button";
    value?: string | string[] | number;
    children?: ReactNode;
    onClick?: () => void;
}

const Button: FC<IButton> = ({ children, onClick, type }) => {
    return (
        <button
            className="px-3 py-1 text-lg font-semibold bg-gradient-to-br from-[#ff0000] to-[#ff00eb] hover:scale-110 duration-150 active:scale-95"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

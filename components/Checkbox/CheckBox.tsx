import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";

const CheckBox = () => {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div
            aria-label="checkbox"
            aria-selected={selected}
            onClick={() => setSelected(!selected)}
            className="flex items-center justify-center w-5 h-5 bg-white border border-pink-400 rounded cursor-pointer dark:border-pink-900 dark:bg-black-600"
        >
            {selected && (
                <CheckIcon className="w-4 h-4 text-pink-400 dark:text-pink-900" />
            )}
        </div>
    );
};

export default CheckBox;

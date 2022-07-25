import {
    ArrowNarrowDownIcon,
    ArrowNarrowUpIcon,
    StarIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { FC } from "react";
import CheckBox from "../Checkbox/CheckBox";

enum Status {
    active = "active",
    inactive = "inactive",
}

interface IProductTableItem {
    title: string;
    image: string;
    price: number;
    status: Status;
    rating: {
        value: number;
        votes: number;
    };
    sales: number;
    trend: {
        direction: "up" | "down";
        value: number;
    };
    views: number;
}

const ProductTableItem: FC<IProductTableItem> = ({
    title,
    image,
    price,
    status,
    rating,
    sales,
    trend,
    views,
}) => {
    return (
        <div className="table-row align-middle duration-150 ease-in border-b border-pink-400 dark:border-pink-900 hover:bg-neutral-200 dark:hover:bg-black-600">
            <div className="table-cell px-3 py-5 align-middle">
                <CheckBox />
            </div>
            <div className="table-cell py-5 px-3 align-middle w-[320px]">
                <div className="flex flex-grow-0 gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src={image}
                            alt=""
                            width={100}
                            height={100}
                            className="rounded-xl"
                            draggable={false}
                        />
                    </div>
                    <div className="w-52">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
            <div className="table-cell px-3 py-5 align-baseline">
                <span>{price}zł</span>
            </div>
            <div className="table-cell px-3 py-5 align-baseline">
                <div className="">
                    {status === "active" ? (
                        <span className="px-2 py-1 bg-green-400 rounded-lg shadow-md text-neutral-50 dark:bg-green-600">
                            Active
                        </span>
                    ) : (
                        <span className="px-2 py-1 bg-red-600 rounded-lg shadow-md text-neutral-50">
                            Inactive
                        </span>
                    )}
                </div>
            </div>
            <div className="table-cell px-3 py-5 align-baseline">
                <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    {rating?.value}({rating?.votes})
                </div>
            </div>
            <div className="table-cell px-3 py-5 align-baseline">
                <div className="flex items-center space-x-2">
                    <div>
                        <span className="px-2 py-1 rounded-lg shadow-md bg-neutral-100 dark:bg-black-600">
                            {sales?.toString()}zł
                        </span>
                    </div>
                    {trend?.direction === "up" ? (
                        <div className="flex items-center space-x-1 text-green-500">
                            <ArrowNarrowUpIcon className="w-4 h-4" />
                            <span>{trend?.value.toString()}%</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-1 text-red-500">
                            <ArrowNarrowDownIcon className="w-4 h-4" />
                            <span>{trend?.value.toString()}%</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="table-cell px-3 py-5 align-baseline">
                <div>
                    <span className="px-2 py-1 rounded-lg shadow-md bg-neutral-100 dark:bg-black-600">
                        {views?.toString()}k
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductTableItem;

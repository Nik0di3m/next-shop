import React, { FC } from "react";

interface INewsFeed {
    children?: React.ReactNode;
}

const NewsFeed: FC<INewsFeed> = ({ children }) => {
    return (
        <div className="absolute max-w-lg space-y-4 italic top-1/3 left-20">
            <h1 className="text-4xl font-semibold drop-shadow">
                What{"'"}s new?
            </h1>
            <div
                tabIndex={0}
                className="max-h-[528px] space-y-8 overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-rounded-full"
            >
                {children}
            </div>
        </div>
    );
};

export default NewsFeed;

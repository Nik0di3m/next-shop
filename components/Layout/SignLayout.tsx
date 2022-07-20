import Image from "next/image";
import { FC } from "react";
import Logo from "../Icons/Logo";

import NewsFeed from "../NewsFeed/NewsFeed";
import NewsFeedItem from "../NewsFeed/NewsFeedItem";

interface ISignLayout {
    children?: React.ReactNode;
}

const SignLayout: FC<ISignLayout> = ({ children }) => {
    return (
        <main className="flex w-full h-screen">
            <div className="relative w-2/5">
                <Image
                    src="/images/mesh-gradient_min.png"
                    alt="background"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/placeholder/mesh-gradient-placeholder.png"
                    draggable={false}
                />
                <NewsFeed>
                    <NewsFeedItem />
                    <NewsFeedItem />
                    <NewsFeedItem />
                    <NewsFeedItem />
                    <NewsFeedItem />
                </NewsFeed>
            </div>
            <div className="flex-grow h-full max-w-5xl p-10 mx-auto">
                <div>
                    <Logo fill="white" width={2} height={2} />
                </div>
                {children}
            </div>
        </main>
    );
};

export default SignLayout;

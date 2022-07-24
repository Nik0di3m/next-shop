import Image from "next/image";
import { FC } from "react";

interface IAdminAvater {
    image: string | undefined | null;
    name: string | undefined | null;
}

const AdminAvatar: FC<IAdminAvater> = ({ image, name }) => {
    return (
        <div className="flex items-center space-x-5">
            <div>
                <span>{name}</span>
            </div>
            <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full outline outline-1 outline-pink-600">
                <Image
                    src={image || "/images/placeholder/user_placeholder.jpg"}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default AdminAvatar;

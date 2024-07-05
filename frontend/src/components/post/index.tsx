import { FiHeart } from "react-icons/fi";

interface Props{
    name: string,
    content: string,
    likes: number,
    userId: string,
}

export function Post({content, name, likes, userId}: Props) {
    return (
        <div className="flex flex-col w-full space-y-1">
            <div key={userId} className="flex flex-row gap-3">
                <p>{name}</p>
            </div>

            <div className="flex flex-col space-y-1">
                <p>{content}</p>
                <p className="flex flex-row items-center gap-2">
                    <FiHeart className="hover:text-red-500"/>
                    {likes}
                </p>
            </div>
        </div>
    )
}
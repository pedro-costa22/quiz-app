//types
import Link from "next/link";
import { IButton } from "../types/Button";

export default function Button({href, text, onClick}: IButton){

    const renderButton = () => {
        return (
            <button 
            className={`bg-[#9885f0] text-white rounded-lg font-extralight text-[1.2rem] border-none py-3 px-6 mt-10 hover:scale-105`}
            style={{transition: 'all .2s ease-in-out',}}
            onClick={onClick} 
            >
                {text}
            </button>
        )
    };

    return href ? (
        <Link href={href}>
            {renderButton()}
        </Link>
    ) : renderButton();
}
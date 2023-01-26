//types
import { IStatic } from "../types/Static";

export default function Static({value, text, bgColor, fontColor}: IStatic){
    return (
        <div className={`
            flex flex-col m-[10px] items-center
        `}>

            <div className={`
                flex justify-center items-center 
                h-[180px] w-[180px] rounded-[90px]
                text-[4rem]
            `} style={{
                backgroundColor: bgColor ?? '#FDD60F',
                color: fontColor ?? '#333'
            }}>
                {value}
            </div>

            <div className="text-white text-[1.7rem] font-extralight">
                {text}
            </div>
        </div>
    )
}
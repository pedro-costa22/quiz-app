//types
import { IStatement } from "../types/Statement";

export default function Statement({text}: IStatement){
    return (
        <div className="flex">
            <span className="text-[2.5rem] font-bold">
                {text}
            </span>
        </div>
    )
}
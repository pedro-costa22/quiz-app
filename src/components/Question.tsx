//Types
import { IQuestion } from "../types/Question";

//Components
import Response from "./Response";
import Statement from "./Statement";
import Timer from "./Timer";

const letters = [
    {value: 'A', color: '#F2C866'},
    {value: 'B', color: '#F266BA'},
    {value: 'C', color: '#85D4F2'},
    {value: 'D', color: '#BCE596'},
];

export default function Question(props: IQuestion){
    const question = props.value;

    const renderResponses = () => {
        return question?.getResponse?.map((response, i) => {
            return <Response 
                        key={`${question?.getId}${i}`}
                        value={response}
                        indice={i}
                        letter={letters[i].value}
                        backgroundLetter={letters[i].color}
                        onResponse={props.onResponse}
                    />
        })
    }

    return (
        <div className="flex flex-col items-center">
            <Statement text={question?.getStatement}/>
            <Timer duration={props.timeToResponse ?? 10} timeOver={props.timeOver} key={question?.getId}/>
            {renderResponses()}
        </div>
    )
}
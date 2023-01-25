//types
import { IQuiz } from "../types/Quiz";

//components
import Question from "./Question";
import Button from "./Button";

export default function Quiz({question, lastQuestion, questionAnswered, nextStep}: IQuiz){
    
    const onResponse = (indice: number) => {
        if(!question.getAnswered) {
            questionAnswered(question.responseWith(indice));
        }
    }
    
    return (
        <div className="flex flex-col justify-center items-center">
            <Question 
                value={question}
                timeToResponse={8}
                onResponse={onResponse}
                timeOver={nextStep}
            />
            <Button 
                onClick={nextStep}
                text={lastQuestion ? 'Finalizar' : 'Continuar'}
            />
        </div>
    )
}
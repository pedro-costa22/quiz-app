//react
import { useEffect, useRef, useState } from "react";

//Components
import Quiz from "../components/Quiz";

//Models
import QuestionModel from "../model/question";
import ResponseModel from "../model/response";


const questaoTeste = new QuestionModel(1, 'Melhor cor ?', [
  ResponseModel.incorrectAsk('verde'),
  ResponseModel.incorrectAsk('vermelho'),
  ResponseModel.incorrectAsk('preto'),
  ResponseModel.correctAsk('azul')
]);

export default function Home() {

  const [question, setQuestion] = useState(questaoTeste);
  const questionRef = useRef<QuestionModel>();
  
  function onResponse(indice: number): void {
    setQuestion(question.responseWith(indice));
    console.log(indice);
  }

  function timeOver() {
    if(!questionRef.current?.getAnswered) {
      setQuestion(question.responseWith(-1));
    }

  }

  function questionAnswered(question: QuestionModel) {

  }

  function nextStep() {

  }

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  return (
    <div className={`
      flex h-screen justify-center items-center flex-col
    `}>
      <Quiz 
        question={question}
        lastQuestion={true}
        questionAnswered={questionAnswered}
        nextStep={nextStep}
      />
    </div>
  )
}

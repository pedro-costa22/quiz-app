import { useState } from "react";
import Question from "../components/Question";
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
  
  function onResponse(indice: number): void {
    setQuestion(question.responseWith(indice));
    console.log(indice);
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
    `}>
      <Question value={question} onResponse={onResponse}/>
    </div>
  )
}

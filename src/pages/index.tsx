//react
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

//Components
import Quiz from "../components/Quiz";

//Models
import QuestionModel from "../model/question";

//Base url
const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);
  const questionRef = useRef<QuestionModel>();

  async function loadIdQuestion() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const idsQuestions = await resp.json();
    setIdsQuestions(idsQuestions);
  }

  async function loadQuestion(id: number) {
    const resp = await fetch(`${BASE_URL}/questions/${id}`);
    const question = await resp.json();
    const newQuestion = QuestionModel.fromObject(question);
    setQuestion(newQuestion);
  }
  
  function onResponse(indice: number): void {
    setQuestion(question?.responseWith(indice));
    console.log(indice);
  }

  function timeOver() {
    if(!questionRef.current?.getAnswered) {
      setQuestion(question?.responseWith(-1));
    }

  }

  function questionAnswered(question: QuestionModel) {
    setQuestion(question);
    const correct = question.getSuccess;
    setCorrectAnswer(correctAnswer + (correct ? 1 : 0));
  }

  function getNextId(){
    const nextIndice = idsQuestions.indexOf(question?.getId ?? 0) + 1;
    return idsQuestions[nextIndice];
  }

  function nextStep() {
    const nextId = getNextId();
    nextId ? toNextQuestion(nextId) : tofinalQuiz();
  }

  function toNextQuestion(id: number){
    loadQuestion(id)
  }

  function tofinalQuiz(){
    router.push({
      pathname: '/result',
      query: {
        total: idsQuestions.length,
        correct: correctAnswer
      }
    });
  }

  useEffect(() => {
    loadIdQuestion();
  }, []);

  useEffect(() => {
    idsQuestions.length > 0 && loadQuestion(idsQuestions[0]);
  }, [idsQuestions]);

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  return (
      <Quiz 
        question={question}
        lastQuestion={getNextId() === undefined ? true : false}
        questionAnswered={questionAnswered}
        nextStep={nextStep}
      />
  )
}

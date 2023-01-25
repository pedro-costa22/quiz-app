import QuestionModel from "../model/question";

export interface IQuiz {
    question: QuestionModel;
    lastQuestion: boolean;
    questionAnswered: (question: QuestionModel) => void;
    nextStep: () => void;
}
import QuestionModel from "../model/question";

export interface IQuestion {
    value: QuestionModel;
    onResponse: (indice: number) => void;
}
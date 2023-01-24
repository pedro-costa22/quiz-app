import ResponseModel from "../model/response";

export interface IResponse {
    value: ResponseModel;
    indice: number;
    letter: string;
    backgroundLetter: string;
    onResponse: (indice: number) => void;
}
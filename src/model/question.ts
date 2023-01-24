import sort from "../functions/arrays";
import ResponseModel from "./response";

export default class QuestionModel {
    private id: number;
    private statement: string;
    private response: ResponseModel[];
    private success: boolean;
    private answered: boolean;

    constructor(id: number, statement: string, response: ResponseModel[], success: boolean = false, answered: boolean = false){
        this.id = id;
        this.statement = statement;
        this.response = response;
        this.success = success;
        this.answered = answered;
    }

    //getters
    get getId(): number {
        return this.id;
    }

    get getStatement(): string {
        return this.statement;
    }

    get getResponse(): any[] {
        return this.response;
    }

    get getSuccess(): boolean {
        return this.success
    }

    get getAnswered() {
        for(let response of this.response) {
            if(response.getRevealed) return true;
        }
        return false;
    }

    toObject() {
        return {
            id: this.id,
            statement: this.statement,
            reposponse: this.response.map(resp => resp.toObject()),
            success: this.success,
            answered: this.getAnswered
        }
    }

    responseWith(indice:  number): QuestionModel {
        const correct = this.response[indice]?.getCorrect;
        const responses = this.response.map((response, i) => {
            const responseSelect = indice === i;
            const reviewResponses = responseSelect || response.getCorrect
            return reviewResponses ? response.reveleation() : response;
        })

        return new QuestionModel(this.id, this.statement, responses, correct);
    }

    sortResponse(): QuestionModel {
        let responseSorts = sort(this.response);
        return new QuestionModel(this.id, this.statement, responseSorts, this.success);
    }

}
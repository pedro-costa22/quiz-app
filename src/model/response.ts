
export default class ResponseModel {
    private value: string;
    private correct: boolean;
    private revealed: boolean;

    constructor(value: string, correct: boolean, revealed: boolean = false){
        this.value = value;
        this.correct = correct;
        this.revealed = revealed;
    }

    static correctAsk(value: string) {
        return new ResponseModel(value, true);
    }

    static incorrectAsk(value: string){
        return new ResponseModel(value, false);
    }

    //getters
    get getValue(): string {
        return this.value;
    }

    get getCorrect(): boolean {
        return this.correct;
    }

    get getRevealed(): boolean {
        return this.revealed;
    }

    toObject() {
        return {
            value: this.value,
            correct: this.correct,
            revealed: this.revealed
        }
    }

    reveleation() {
        return new ResponseModel(this.value, this.correct, true);
    }

}
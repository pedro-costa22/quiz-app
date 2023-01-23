import sort from "@/src/functions/arrays";
import questions from "../dbQuestions";

export default function handler(
    req: any,
    res: any
  ) {
    const ids = questions.map(question => question.getId)
    res.status(200).json(sort(ids));
  
  }
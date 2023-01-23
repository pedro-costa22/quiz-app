// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import questions from '../dbQuestions';


export default function handler(
  req: any,
  res: any
) {
    const idSelect = +req.query.id
    const questionSelect =  questions.filter(question => question.getId === idSelect);

    if(questionSelect.length === 1) {
      const question = questionSelect[0].sortResponse();
      res.status(200).json(question.toObject());

    } else {
      res.status(204).send();
    }


}

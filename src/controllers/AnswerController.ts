import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { s } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(s)
    });

    if(!surveyUser) {
      return response.status(400).json({
        error: "Survey User does not exists!"
      })
    }

    if(surveyUser.value) {
      return response.status(400).json({
        error: "Survey already answered!"
      })
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController }
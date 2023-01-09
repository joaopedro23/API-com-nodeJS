import { Request, Response } from "express";
import { CreateMovieRentUseCase } from './CreateMovieRentUseCase';



export class CreateMovieRentControler {
    async handle(req:Request, res: Response){
        const { movieId, userId } = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase();

        const result = await createMovieRentUseCase.execute({
           movieId,
           userId
        });

        return res.status(201).json(result);
    }
}
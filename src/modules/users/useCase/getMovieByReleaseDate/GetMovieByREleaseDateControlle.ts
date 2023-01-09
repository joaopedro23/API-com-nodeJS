import { Request, Response } from "express";
import { GetMovieByREleaseDateUseCase } from "./GetMovieByREleaseDateUseCase";


export class GetMovieByREleaseDateControlle {
    async handle(req:Request, res: Response){
        

        const getMovieByREleaseDateUseCase= new GetMovieByREleaseDateUseCase();

        const result = await getMovieByREleaseDateUseCase.execute();

        return res.status(201).json(result);
    }
}
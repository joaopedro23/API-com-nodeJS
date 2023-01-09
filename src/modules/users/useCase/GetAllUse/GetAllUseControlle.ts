import { Request, Response } from "express";
import { GetAllUseCase } from './GetAllUseCase';



export class GetAllUseControlle {
    async handle(req:Request, res: Response){
      
        const getAllUseUserCase = new GetAllUseCase();

        const result = await getAllUseUserCase.execute();

        return res.status(201).json(result);
    }
}
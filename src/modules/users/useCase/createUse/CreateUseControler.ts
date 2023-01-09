import { Request, Response } from "express";
import { CreateUseUseCase } from "./CreateUseUseCase";

export class CreateUseControler {
    async handle(req:Request, res: Response){
        const {name, email } = req.body;

        const createUseUseCase = new CreateUseUseCase();

        const result = await createUseUseCase.execute({name, email});

        return res.status(201).json(result);
    }
}
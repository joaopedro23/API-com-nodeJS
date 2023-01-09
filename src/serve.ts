import "express-async-errors"
import express, { NextFunction } from 'express';
import { routes } from './routes/index';
import { Request } from 'express';
import { Response } from 'express';
import { AppError } from './erros/AppErros';

const app = express();

app.use(express.json())

app.use(routes);

app.use((err: Error, request: Request, response:Response, next:NextFunction ) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:"erro",
            message: err.message
        })
    }
    return response.status(500).json({
        status:"erro",
        message: `Internal erro serve ${err.message}`
    })
} )


app.listen(3000, () => console.log("servido rodando na porta 3000"))

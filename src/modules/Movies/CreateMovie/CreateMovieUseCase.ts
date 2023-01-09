import { Movie } from "@prisma/client";

import { prisma } from '../../../prisma/client'
import { AppError } from '../../../erros/AppErros';
import { CreateMovieDTO } from "../CreateMovieDTO";

export class CreateMovieUseCase {
    async execute({title, duration, release_date}: CreateMovieDTO): Promise<Movie> {
        //verifica se o filme ja existe//
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title,
            }
        });
        if(movieAlreadyExists){
            //erro // 
            throw new AppError("Movie already exists!! usuario ja existe  ")
        }

        
        // cria filme //
        const movie = await prisma.movie.create({
            data:{
               title,
               duration,
               release_date,
               
            }
        })
        return movie
    }
}
import { prisma } from '../../../prisma/client';
import { CreateMovieRentDTO } from './../CreateMovieRentDTO';
import { AppError } from './../../../erros/AppErros';




export class CreateMovieRentUseCase{ 


    async execute({ movieId,userId }: CreateMovieRentDTO): Promise<void>  {
        // verifa se o filme exite//
            const movieExists = await prisma.movie.findUnique({
                where: {
                    id: movieId
                }
            })

            if(!movieExists){
                throw new AppError("Movie is not exists")
            }

        // verifica se o filme nao esta alugado por outro user//
               const movieAllreadyRented = await prisma.movieRent.findFirst({
                where:{
                    movieId
                }
               }) 

               if(movieAllreadyRented){
                throw new AppError("Movie Allready Rented")
               }



        //verifica se o usuario existe//
        
        const UserExists = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
           
        if(!UserExists){
            throw new AppError("User does not exists ")
           }


        // cria locação 
            await prisma.movieRent.create({
                data:{
                    movieId,
                    userId
                }
            });


    }
 }

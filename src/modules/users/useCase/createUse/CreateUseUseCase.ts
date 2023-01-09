
import { User } from "@prisma/client";
import { CreateUseDTO } from "../../CreateUseDTO";
import { prisma } from './../../../../prisma/client';
import { AppError } from './../../../../erros/AppErros';

export class CreateUseUseCase {
    async execute({name, email}: CreateUseDTO): Promise<User> {
        //verifica se o usuario ja existe//
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if(userAlreadyExists){
            //erro // 
            throw new AppError("User already exists!! usuario ja existe  ")
        }

        
        // cria usuario //
        const user = await prisma.user.create({
            data:{
                name,
                email,
            }
        })
        return user
    }
}
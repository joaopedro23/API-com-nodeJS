import { Router } from "express"
import { CreateUseControler } from "../modules/users/useCase/createUse/CreateUseControler";
import { GetAllUseControlle } from './../modules/users/useCase/GetAllUse/GetAllUseControlle';

const createUserCotrole = new CreateUseControler();
const useRouter = Router();
const getAllUseControle = new GetAllUseControlle


useRouter.post("/", createUserCotrole.handle);
useRouter.get("/", getAllUseControle.handle)
export { useRouter }
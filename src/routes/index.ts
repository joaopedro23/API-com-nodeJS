import { Router } from "express"
import { movieRouter } from "./MovierRouter";
import { useRouter } from "./UseRoutes";

const routes = Router();

routes.use("/users", useRouter);
routes.use("/movie",movieRouter)
 export  { routes };


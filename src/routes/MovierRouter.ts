import { Router } from "express"
import { CreateMovieControler } from "../modules/Movies/CreateMovie/CreateMovieControler";
import { CreateMovieRentControler } from './../modules/Movies/CreateMovieRent/CreateMovieRentControlle';
import { GetMovieByREleaseDateControlle } from './../modules/users/useCase/getMovieByReleaseDate/GetMovieByREleaseDateControlle';

const createMovieControler = new CreateMovieControler();
const movieRouter = Router();
const createMovieRentControlle = new CreateMovieRentControler()
const  getMovieByREleaseDateControlle = new GetMovieByREleaseDateControlle()

movieRouter.post("/", createMovieControler.handle);
movieRouter.post("/rent",createMovieRentControlle.handle )
movieRouter.get("/release",getMovieByREleaseDateControlle.handle)

export { movieRouter }
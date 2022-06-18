import { Router } from "express";
import { getDataController } from "../controllers/readData.controllers.js";

const routes = Router()

routes.get(`/data`, getDataController)

export default routes
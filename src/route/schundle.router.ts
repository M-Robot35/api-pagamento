import { Router } from "express";
import SchundleJobsController from "../controller/SchundleJobs.controller";

//
const taskJobs = Router();

taskJobs.post("/schundle", SchundleJobsController.executeJobs);

export default taskJobs;

/**
 * buscar tarefa unica
 * buscar todas as tarefas
 * alterar tarefa
 * deletar tarefa
 */
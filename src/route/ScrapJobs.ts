import { Router } from "express";
import ScrapJobsController from "../controller/ScrapJobs.controller";

//
const scrapJobs = Router();

scrapJobs.get("/jobs", ScrapJobsController.jobs);

export default scrapJobs;

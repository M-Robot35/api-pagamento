import { Request, Response } from "express";

class ScrapJobs {
  constructor() {}

  jobs(req: Request, res: Response) {
    res.send("jobs Online");    
  }
}
export default new ScrapJobs(); 
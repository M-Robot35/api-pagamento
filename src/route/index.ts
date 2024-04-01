import { Request, Response, Router } from "express";
import scrapJobs from "./ScrapJobs";
import taskJobs from "./schundle";
import payment from "./payment";
//
import "../controller/teste.dto"; // apagar

const router = Router();

router.get("/", (req: Request, res: Response) => {
  function teste() {
    return ["1", "2", "3"];
  }

  const x = teste();
  console.log(x);

  res.send("tudo ok Teste ONLINE");
});

router.use(scrapJobs);
router.use(taskJobs);
router.use(payment);

export default router;

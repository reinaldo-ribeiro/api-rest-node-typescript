import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res) => {
  res.send("Olá dev");
});

router.post("/teste/:id", (req, res) => {
  console.log(req.params.id);
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };

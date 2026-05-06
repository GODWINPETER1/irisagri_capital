import { Router } from "express";
import { sendQuote } from "../controller/quote.controller";
import { validate } from "../middleware/validate";
import { quoteSchema } from "../validators/quote.validator";

const router = Router();

router.post("/quote", validate(quoteSchema), sendQuote);

export default router;
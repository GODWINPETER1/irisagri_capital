import { Router } from "express";
import { sendContact } from "../controller/contact.controller";
import { validate } from "../middleware/validate";
import { contactSchema } from "../validators/contact.validator"

const router = Router();

router.post("/contact", validate(contactSchema), sendContact);

export default router;
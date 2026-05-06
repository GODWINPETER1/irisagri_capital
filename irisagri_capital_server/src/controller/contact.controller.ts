import { Request, Response } from "express";
import { sendContactEmail } from "../services/contact.service";
import { success } from "zod";

export const sendContact = async (req: Request, res: Response) => {
  try {
    await sendContactEmail(req.body);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log("Full ERROR", error)

    return res.status(500).json({
      success: false,
      message: "server error",
      error: String(error)
    })
  }
};
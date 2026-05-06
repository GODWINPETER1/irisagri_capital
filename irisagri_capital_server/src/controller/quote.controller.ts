import { Request, Response } from "express";
import { sendQuoteEmail } from "../services/quote.service";

export const sendQuote = async (req: Request, res: Response) => {
  try {
    await sendQuoteEmail(req.body);

    return res.status(200).json({
      success: true,
      message: "Quote request sent successfully",
    });

  } catch (error) {
    console.error("QUOTE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
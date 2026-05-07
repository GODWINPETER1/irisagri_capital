"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendQuote = void 0;
const quote_service_1 = require("../services/quote.service");
const sendQuote = async (req, res) => {
    try {
        await (0, quote_service_1.sendQuoteEmail)(req.body);
        return res.status(200).json({
            success: true,
            message: "Quote request sent successfully",
        });
    }
    catch (error) {
        console.error("QUOTE ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
exports.sendQuote = sendQuote;

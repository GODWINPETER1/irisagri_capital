"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = void 0;
const contact_service_1 = require("../services/contact.service");
const sendContact = async (req, res) => {
    try {
        await (0, contact_service_1.sendContactEmail)(req.body);
        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    }
    catch (error) {
        console.log("Full ERROR", error);
        return res.status(500).json({
            success: false,
            message: "server error",
            error: String(error)
        });
    }
};
exports.sendContact = sendContact;

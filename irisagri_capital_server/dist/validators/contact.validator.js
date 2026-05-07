"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    fullName: zod_1.z
        .string()
        .min(3, "Full name must be at least 3 characters"),
    email: zod_1.z
        .string()
        .email("Invalid email address"),
    phone: zod_1.z
        .string()
        .min(6, "Phone number is too short"),
    subject: zod_1.z
        .string()
        .optional(),
    message: zod_1.z
        .string()
        .min(10, "Message must be at least 10 characters"),
});

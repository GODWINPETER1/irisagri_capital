"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteSchema = void 0;
const zod_1 = require("zod");
exports.quoteSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name is required"),
    email: zod_1.z.string().email("Invalid email"),
    phone: zod_1.z.string().min(6, "Phone is required"),
    company: zod_1.z.string().optional(),
    country: zod_1.z.string().min(2, "Country is required"),
    product: zod_1.z.string().min(1, "Product is required"),
    quantity: zod_1.z.string().min(1, "Quantity is required"),
    timeline: zod_1.z.string().min(1, "Timeline is required"),
    message: zod_1.z.string().optional(),
});

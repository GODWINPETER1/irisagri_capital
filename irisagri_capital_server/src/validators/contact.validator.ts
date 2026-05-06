import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(6, "Phone number is too short"),

  subject: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});
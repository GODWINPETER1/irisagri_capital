import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone is required"),

  company: z.string().optional(),
  country: z.string().min(2, "Country is required"),

  product: z.string().min(1, "Product is required"),
  quantity: z.string().min(1, "Quantity is required"),
  timeline: z.string().min(1, "Timeline is required"),

  message: z.string().optional(),
});
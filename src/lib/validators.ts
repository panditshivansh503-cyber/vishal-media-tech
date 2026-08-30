import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2).max(80),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email(),
  companyName: z.string().max(120).optional().or(z.literal("")),
  serviceRequired: z.string().min(2),
  message: z.string().min(10).max(2000)
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

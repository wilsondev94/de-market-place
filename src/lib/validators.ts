import z from "zod";

export const AuthCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export const InfiniteQuerySchema = z.object({
  category: z.string().optional(),
  sort: z.enum(["asc", "desc"]).optional(),
  limit: z.number().optional(),
});

export type InfiniteQueryValidator = z.infer<typeof InfiniteQuerySchema>;

export type AuthCredentialsValidator = z.infer<typeof AuthCredentialsSchema>;

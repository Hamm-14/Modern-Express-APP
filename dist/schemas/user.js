import { z } from "zod";
export const CreateUserSchema = z.object({
    body: z.object({
        email: z.email("Invalid email format"),
        firstName: z.string().min(2, "First name too short"),
        lastName: z.string().min(2, "Last name too short"),
        age: z.number().min(18, "Age must be at least 18"),
    }),
});

import { z } from "zod";
export declare const CreateUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        firstName: z.ZodString;
        lastName: z.ZodString;
        age: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;

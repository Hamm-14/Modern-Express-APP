import { z } from "zod";
export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (e) {
        if (e instanceof z.ZodError) {
            const errorMessage = e.issues[0].message;
            console.error("Validation Error: ", errorMessage);
            return res.status(400).json(errorMessage);
        }
        return res.status(400).json("Invalid request");
    }
};
export const add = (a, b) => {
    return a + b;
};

import { Request, Response, NextFunction } from "express";
import { z, ZodObject } from "zod";

export const validateSchema =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (e: any) {
      if (e instanceof z.ZodError) {
        const errorMessage = e.issues[0].message;
        console.error("Validation Error: ", errorMessage);
        return res.status(400).json(errorMessage);
      }
      return res.status(400).json("Invalid request");
    }
  };

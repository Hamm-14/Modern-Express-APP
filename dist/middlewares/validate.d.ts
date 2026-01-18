import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
export declare const validateSchema: (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export declare const add: (a: number, b: number) => number;

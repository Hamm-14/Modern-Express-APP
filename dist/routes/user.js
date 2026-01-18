import express from "express";
import { validateSchema } from "../middlewares/validate";
import { CreateUserSchema } from "../schemas/user";
import { createUserController } from "../controllers/user";
const userRouter = express.Router();
userRouter.get("/", (_, res) => {
    res.send("User route called...");
});
userRouter.post("/", validateSchema(CreateUserSchema), async (req, res) => {
    try {
        return createUserController(req, res);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
export default userRouter;

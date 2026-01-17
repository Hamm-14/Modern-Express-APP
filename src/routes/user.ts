import express, { Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../datasource";

const userRouter = express.Router();

userRouter.get("/", (_, res: Response) => {
  res.send("User route called...");
});

userRouter.post("/", async (req, res: Response) => {
  try {
    const { email, firstName, lastName, age } = req.body;
    const user = new User(email, firstName, lastName, age);

    const userRepository = AppDataSource.getRepository(User);
    const isUserExist = await userRepository.findOneBy({ email });

    if (isUserExist) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    await userRepository.save(user);

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default userRouter;

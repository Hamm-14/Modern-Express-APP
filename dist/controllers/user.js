import { User } from "../entity/User";
import { AppDataSource } from "../datasource";
export const createUserController = async (req, res) => {
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
        return res.status(201).json(user);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

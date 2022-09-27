import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.post("/", verifyEmailAvailabilityMiddleware, createUserController);

router.get("/", listUsersController);

router.put("/:id", updateUserController);

router.delete("/:id", deleteUserController);

router.post("/login", userLoginController);

export default router;

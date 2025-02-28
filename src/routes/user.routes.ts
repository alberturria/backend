import { Router } from "express";
import {
	patchUserHandler,
} from "../controllers/user.controller";
import validateRequest from "../middleware/validateRequest.middleware";
import {
	patchUserSchema,
} from "../schemas/user.schema";

const userRouter = Router();

// NOTE: all routes defined with `userRouter` will be pre-fixed with `/api`

/**
 * This route does following things
 * PATCH -> update user's username
 *
 * @author aayushchugh
 */

userRouter
	.route("/users/:id")
	.patch(validateRequest(patchUserSchema), patchUserHandler)

export default userRouter;

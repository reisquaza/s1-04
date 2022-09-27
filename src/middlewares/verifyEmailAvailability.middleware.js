import { users } from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExist = users.find((user) => user.email === email);

  if (userAlreadyExist) {
    return response
      .status(400)
      .json({ message: "This email adress is already in use" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;

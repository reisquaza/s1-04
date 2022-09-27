import { users } from "../database";

const updateUserService = (id, name, email) => {
  const updatedUser = {
    id,
    name,
    email,
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};

export default updateUserService

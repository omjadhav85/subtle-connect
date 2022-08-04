export const getUserMapping = (usersList) => {
  const usersMap = {};

  usersList.forEach((user) => {
    usersMap[user.username] = user;
  });

  return usersMap;
};

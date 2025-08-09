import User from "../models/user.model.js";
async function getAllUsers() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

const findUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

export { getAllUsers,findUser };

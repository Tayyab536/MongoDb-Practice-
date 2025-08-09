import User from "../models/user.model.js";
async function getAllUsers() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

const findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const findByName = async (name) => {
  try {
    const user = await User.findOne({ name: name });
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const findUserActive = async () => {
  try {
    const user = await User.find({ isActive: true });
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
export { getAllUsers, findUserById, findByName,findUserActive };

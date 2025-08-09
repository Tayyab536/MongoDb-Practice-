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
//Find all users whose age is 24.

const findUserAge24 = async () => {
  try {
    const user = await User.find({ age: 24 });
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
//Find all users with age greater than 30.
const findUserAgeGt30 = async () => {
  try {
    const user = await User.find({ age: { $gt: 30 } });
    return user;
  } catch (e) {
    console.log("error", e);

    throw new e();
  }
};
// Find all users whose age is between 25 and 35 inclusive.

const findUserAge25BT30 = async () => {
  try {
    const user = await User.find({ age: { $gte: 25, $lte: 35 } });
    return user;
  } catch (e) {
    console.log("error", e);

    throw new e();
  }
};
// Find all users whose name starts with "A".

const findUserStartA = async () => {
  try {
    const user = await User.find({ name: { $regex: /^A/ } });
    return user;
  } catch (e) {
    console.log("error", e);

    throw new e();
  }
};
export {
  getAllUsers,
  findUserById,
  findByName,
  findUserActive,
  findUserAge24,
  findUserAgeGt30,
  findUserAge25BT30,
  findUserStartA,
};

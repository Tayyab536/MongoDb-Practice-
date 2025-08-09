async function getAllUsers() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

export {getAllUsers}
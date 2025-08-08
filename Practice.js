import mongoose from "mongoose";
import User from "./models/user.model.js";
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://taibicode:v11MFg5hXd4yiz3x@mysql.efabav5.mongodb.net/DbPractice"
    );
    console.log("connected");
  } catch (error) {
    console.log("not connected", error);
  }
})();

const insertOne = async () => {
  const user = await User.insertOne({
    name: "Tina Morris",
    age: 29,
    skills: ["Cloud Computing", "GCP"],
    address: { city: "Minneapolis", zip: 55401 },
    joined: new Date("2021-01-01"),
    active: true,
  });
};

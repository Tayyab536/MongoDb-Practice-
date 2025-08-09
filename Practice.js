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
  try {
    const user = await User.insertOne({
      name: "Tina Morris",
      email: "mtayyab@gmail.com",
      password: "Cloud Computing",
      age: 24,
      active: true,
    });
    console.log(user);
  } catch (error) {
    console.log("error", error);
  }
};
const insertmanys = async () => {
  try {
    const user = await User.insertMany([
      {
        name: "Tina Morris",
        email: "tina@example.com",
        password: "Cloud Computing",
        age: 24,
        isActive: true,
      },
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "password123",
        age: 29,
        isActive: true,
      },
      {
        name: "Bob Smith",
        email: "bob@example.com",
        password: "secret456",
        age: 25,
        isActive: true,
      },
      {
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: "abc12345",
        age: 32,
        isActive: false,
      },
      {
        name: "Diana Prince",
        email: "diana@example.com",
        password: "wonderwoman",
        age: 27,
        isActive: true,
      },
      {
        name: "Ethan Hunt",
        email: "ethan@example.com",
        password: "missionpass",
        age: 35,
        isActive: false,
      },
      {
        name: "Fiona Carter",
        email: "fiona@example.com",
        password: "webdev123",
        age: 23,
        isActive: true,
      },
      {
        name: "George Miller",
        email: "george@example.com",
        password: "agilepm",
        age: 40,
        isActive: true,
      },
      {
        name: "Hannah Lee",
        email: "hannah@example.com",
        password: "designlove",
        age: 28,
        isActive: true,
      },
      {
        name: "Ian Wright",
        email: "ian@example.com",
        password: "awscloud",
        age: 31,
        isActive: false,
      },
      {
        name: "Jasmine Patel",
        email: "jasmine@example.com",
        password: "nodepower",
        age: 26,
        isActive: true,
      },
      {
        name: "Kevin Adams",
        email: "kevin@example.com",
        password: "datahero",
        age: 33,
        isActive: false,
      },
      {
        name: "Laura Chen",
        email: "laura@example.com",
        password: "vuejsrules",
        age: 24,
        isActive: true,
      },
      {
        name: "Michael Scott",
        email: "michael@example.com",
        password: "dundermifflin",
        age: 45,
        isActive: true,
      },
      {
        name: "Nina Rodriguez",
        email: "nina@example.com",
        password: "mlpython",
        age: 30,
        isActive: true,
      },
      {
        name: "Oliver King",
        email: "oliver@example.com",
        password: "cyberking",
        age: 37,
        isActive: false,
      },
      {
        name: "Priya Singh",
        email: "priya@example.com",
        password: "reactrocks",
        age: 22,
        isActive: true,
      },
      {
        name: "Quentin Blake",
        email: "quentin@example.com",
        password: "django123",
        age: 34,
        isActive: true,
      },
      {
        name: "Rachel Green",
        email: "rachel@example.com",
        password: "marketingpro",
        age: 27,
        isActive: true,
      },
      {
        name: "Samuel Brooks",
        email: "samuel@example.com",
        password: "devopslife",
        age: 38,
        isActive: false,
      },
    ]);
    console.log(user);
  } catch (error) {
    console.log("error", error);
  }
};

// insertOne();
// insertmanys();
getAllUsers();
async function getAllUsers() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

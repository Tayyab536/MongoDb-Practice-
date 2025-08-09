import { ConnectionDataBase } from "./Connection/DBConnetion.js";
// import { insertmanys, insertOne } from "./Insertion/insertions";
import { getAllUsers, findUser } from "./Querys/Queys.js";

ConnectionDataBase()
  .then(async() => {
    // insertOne();
    // insertmanys;
    // getAllUsers();
    const user = await findUser("6895e246e850ccd6e1dc4555"); 
    console.log("user");
    console.log(user);
    
  })
  .catch((e) => {
    throw new e();
  });

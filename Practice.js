import { ConnectionDataBase } from "./Connection/DBConnetion.js";
// import { insertmanys, insertOne } from "./Insertion/insertions";
import { getAllUsers } from "./Querys/Queys.js";

ConnectionDataBase().then(() => {
  // insertOne();
  // insertmanys;
  getAllUsers();
}).catch((e)=>{
  throw new  e 
});

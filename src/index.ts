import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Messages} from "./entity/Messages";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.username = "xxy";
    user.content = "test";
    // user.age = 25;
    await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    //const users = await connection.manager.find(user.username);
    // console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const message = new Messages();
    message.username = "xxy";
    message.content = "test";
    // message.createdAt=new Date().ToLocalTime().ToString();
    // message.updateAt=new Date();
    // user.age = 25;
    await connection.manager.save(message);
    // console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    //const users = await connection.manager.find(user.username);
    // console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
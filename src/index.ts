import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection, getRepository } from "typeorm";
import { RegisterRoutes } from "elf-routing";
import { InitializeAuthentication } from "elf-authentication";
import { User } from "./entity/User";

createConnection()
	.then(async connection => {
		const app = express();

		app.use(bodyParser.json());

		RegisterRoutes(app);

		InitializeAuthentication(getRepository(User));

		app.listen(3000);

		console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
	})
	.catch(error => console.log(error));

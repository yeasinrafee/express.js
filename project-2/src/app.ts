import express, { Response, Request, Application } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRouters } from "./app/modules/user/user.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;

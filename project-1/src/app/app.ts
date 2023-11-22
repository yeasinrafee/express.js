import express, { NextFunction, Request, Response } from "express";
const app = express();

//parser
app.use(express.json());
app.use(express.text());

// Router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User created successfully",
    data: course,
  });
});

////////////////////////////////

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello World!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

export default app;

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

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(holaa);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// global Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User created successfully",
        data: course,
    });
});
////////////////////////////////
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello World!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received data",
    });
});
exports.default = app;

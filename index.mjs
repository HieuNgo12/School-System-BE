import express from "express";
import Serverless from "serverless-http";
import connectToMongo from "./connection.mjs";
import teacherRouter from "./routers/teacherRouter.mjs"
import teacherPositionRouter from "./routers/teacherPositionRouter.mjs"
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
app.use(cors());
connectToMongo();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(bodyParser)
app.use("/teachers", teacherRouter);
app.use("/teachers-positions", teacherPositionRouter);
// You don't need to listen to the port when using serverless functions in production
app.listen(8080, () => {
  console.log(
    "Server is running on port 8080. Check the app on http://localhost:8080"
  );
});

export const handler = Serverless(app);

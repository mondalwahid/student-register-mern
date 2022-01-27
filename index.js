import express, { Router } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "student-register", "build")));
app.use("/students", route);

const port = process.env.PORT || 8000;
const URL =
  "mongodb+srv://wahidMondal:waheed1234@register.eac0q.mongodb.net/student-register?retryWrites=true&w=majority";

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "student-register", "build", "index.html"));
});

mongoose.connect(
  URL || process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error(err);
  }
);

app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
});

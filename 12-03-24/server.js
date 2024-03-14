import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import addBook from "./routes/add-book.js";
import books from "./routes/books.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url); // The fileURLTotPath() returns a fully-resolved platform-specific Node.js file path
const __dirname = path.dirname(__filename); // The path.dirname() method returns the directories of a file path.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use("/add-book", addBook);
app.use("/books", books);

app.get("/", (_, res) => res.sendFile(__dirname + "/public/html/index.html"));

app.listen(port);

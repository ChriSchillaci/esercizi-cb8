import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const route = express.Router();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

route.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "add-book.html"));
});

export default route;

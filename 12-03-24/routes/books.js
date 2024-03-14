import express from "express";
const route = express.Router();

const books = [];

route.post("/", (req, res) => {
  books.push(req.body);
  res.redirect("/");
});

route.get("/", (_, res) => {
  const renderText = ({ title, author }) => {
    const text = `
    <div>
    <p>author: ${author}</p>
    <p>title: ${title}</p>
    </div>
    `;

    return text;
  };

  const data = books.map((data) => {
    const { title, author } = data;
    return renderText({ title, author });
  });

  res.send(
    `
  <h1>Books</h1>
  <a href="/">Click here to go to homepage</a>
  ` + data.join("")
  );
});

export default route;

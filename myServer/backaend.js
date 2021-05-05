const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/myBlog/post", (req, res) => {
  console.log("Hello Post");
  return res.status(200).json({
    title: "我的標題",
    author: "John",
    date: "May 14, 2021",
    image: "leaf.jpg",
    content:
      "<div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><h2>次標題</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, deleniti quos accusamus alias, nihil corrupti deserunt error illum quam culpa placeat. Quam quae doloremque vitae voluptatibus, obcaecati non est eos?</p></div> ",
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

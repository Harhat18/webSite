const express = require("express");
const app = express();

app.set("view engine", "ejs");

const data = [
  {
    id: 1,
    name: "iphone 14",
    price: "2000",
  },
  {
    id: 2,
    name: "iphone 15",
    price: "3000",
  },
  {
    id: 3,
    name: "iphone 16",
    price: "4000",
  },
];

//routes

app.use("/products/:id", function (req, res) {
  res.render("product-details");
});

app.use("/products", function (req, res) {
  res.render("products", { urunler: data });
});

app.use("/", function (req, res) {
  res.render("index");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

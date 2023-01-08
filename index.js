const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const mysql = require("mysql2");
const config = require("./config");
let connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  }
  connection.query("select * from products", function (err, result) {
    console.log(result);
  });

  console.log("bağlantı yapıldı");
});

const data = [
  {
    id: 1,
    name: "iphone 14",
    price: "2000",
    isActive: true,
    imageUrl: "1.jpeg",
    isHome: false,
  },
  {
    id: 2,
    name: "iphone 15",
    price: "3000",
    isActive: false,
    imageUrl: "2.jpeg",
    isHome: true,
  },
  {
    id: 3,
    name: "iphone 16",
    price: "4000",
    isActive: true,
    imageUrl: "3.jpeg",
    isHome: true,
  },
];

//routes

app.use("/products/:id", function (req, res) {
  const urun = data.find((u) => u.id == req.params.id);
  res.render("product-details", urun);
});

app.use("/products", function (req, res) {
  res.render("products", { urunler: data });
});

app.use("/", function (req, res) {
  res.render("index", { urunler: data });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

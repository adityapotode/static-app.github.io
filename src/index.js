// const express = require("express");
// const app = express();
// const path = require("path");

// // path for public folder
// const staticPath = path.join(__dirname, "../public");

// // middleware
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.send("Hello from Home Page");
// });

// app.get("/services", (req, res) => {
//   res.send("Hello from Services Page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Hello from Contact Page");
// });

// app.listen(8000, () => {
//   console.log(`Server is running on: http://localhost:8000`);
// });



const express = require("express");
const app = express();
const path = require("path");

// path for public folder
const staticPath = path.join(__dirname, "../public");

// middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

app.get("/services", (req, res) => {
  res.send("Hello from Services Page");
});

app.get("/about", (req, res) => {
  res.send("Hello from About Page");
});

app.get("/contact", (req, res) => {
  res.send("Hello from Contact Page");
});

app.listen(8000, () => {
  console.log(`Server is running on: http://localhost:8000`);
});

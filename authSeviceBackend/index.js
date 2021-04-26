const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// app.use(bodyParser(urlencoded({ extended: false })));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin" && password === "12345") {
    res.json({ success: true, token: "test_token" });
  } else {
    res.json({ success: false });
  }
});

app.listen(3050, () => {
  console.log("listen");
});

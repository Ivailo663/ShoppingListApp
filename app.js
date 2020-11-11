const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3002;
var path = require("path");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
const userSchema = require("./server/Schemas/usersSchema");

app.use(express.json());

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    // console.log(connection.connections);
    console.log("Success!!");
  })
  .catch((err) => console.log(err, "ERROR"));

const User = mongoose.model("User", userSchema);

const saveUser = async (user) => {
  try {
    await User.create(user);
  } catch (err) {
    console.log(err);
  }
};
// saveUser();

app.use(cors());
app.post("/createUser", function (req, res) {
  saveUser(req.body);
  res.send("from BE");
});
app.use(express.static("./dist", { index: "index.html" }));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.use("/static", express.static(path.join(__dirname, "src/styles/gallery/")));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

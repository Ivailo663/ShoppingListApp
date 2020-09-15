const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
var path = require("path");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
const userSchema = require("./server/Schemas/usersSchema");

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

// const mySchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

const User = mongoose.model("User", userSchema);

User.create({
  username: "Ivo",
  email: "ivailo663.com",
}).then(console.log("all good"));

// const myFunc = async () => {
//   const res = await Model.find({ age: { $gte: 25 } });
//   console.log(res, "??");
// };

// myFunc();

app.use(express.static("./dist", { index: "index.html" }));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.use("/static", express.static(path.join(__dirname, "src/styles/gallery/")));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

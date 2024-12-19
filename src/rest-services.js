const path = require("path");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const controller = require("./controller");

const app = express();

app.use(helmet());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false })); //for accepting multipart urlencoded forms in req
app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public"))); //for having react frontend as static server

init();
function init() {
  function users() {
    app.get("/", controller.users.getUsersAction);
    app.get("/:id", controller.users.getUserAction);
  }

  users();
}

module.exports = app;

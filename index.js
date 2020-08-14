const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");

const authRoutes = require("./routes/authRoutes");
const passportStrategy = require("./services/passport");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
passportStrategy;
// if (process.env.NODE_ENV === "production") {
//   // express will serve up production files
//   app.use(express.static("client/build"));

//   const path = require("path");
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// }

app.get("/", (req, res) => {
  res.json({
    api: "Denmercs Photography BE is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App is running on port 5000 ");
});

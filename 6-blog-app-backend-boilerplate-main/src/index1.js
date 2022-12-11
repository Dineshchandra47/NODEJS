const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost:27017/blogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("Mongoose connection to DB is successful");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});

// const express = require("express");
// const mongoose = require("mongoose");
// // const Router = require("./routes")

// const app = express();

// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/newBlog',   {
//      useNewUrlParser: true,
//      useFindAndModify: false,
//      useUnifiedTopology: true
//    }
//  );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
// // app.use(Router);

// app.listen(3000, () => {
//   console.log("Server is running at port 3000");
// });

const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config()
// connect to DB
// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// }).catch((err)=>console.log(err))

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false,}).then(()=>{
    console.log("connection to DB is successful")
}).catch((err)=>console.log(err))


app.listen(3000, () => console.log('Server is running...... on PORT 3000'));

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();

// mongoose.connect("mongodb://localhost:27017/newBlog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });
// mongoose.connection.on("error", (err) => {
//   console.log("err", err);
// });
// mongoose.connection.on("connected", (err, res) => {
//   console.log("Mongoose connection to DB is successful");
// });
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`App is listening on PORT ${PORT}`);
// });

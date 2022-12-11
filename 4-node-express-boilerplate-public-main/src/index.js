const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

// app.get("", (req, res) => {
//   res.status(200).send("Hello world, welcome to NODEJS!!");

// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const first_Input = req.body.num1;
  const second_Input = req.body.num2;
  const third_Input = req.body.num3;

  if (isNaN(first_Input) && isNaN(second_Input)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(first_Input) < -1000000 &&
    parseFloat(second_Input) < -1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(first_Input) > 1000000 &&
    parseFloat(second_Input) > 1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: `The sum of given two numbers ${first_Input} + ${second_Input} + ${third_Input} `,
      sum: parseFloat(first_Input) + parseFloat(second_Input) + parseFloat(third_Input),
    };
  }

  let data = res.end(JSON.parse( JSON.stringify(response)));
  console.log(data)
});

app.post("/sub", (req, res) => {
  console.log(req.body);
  const first_Input = req.body.num1;
  const second_Input = req.body.num2;

  if (isNaN(first_Input) && isNaN(second_Input)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(first_Input) < -1000000 &&
    parseFloat(second_Input) < -1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(first_Input) > 1000000 &&
    parseFloat(second_Input) > 1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: `The difference of given two numbers ${first_Input} - ${second_Input}`,
      Difference: parseFloat(first_Input) - parseFloat(second_Input),
    };
  }

  res.end(JSON.stringify(response));
});

app.post("/multiply", (req, res) => {
  console.log(req.body);
  const first_Input = req.body.num1;
  const second_Input = req.body.num2;

  if (isNaN(first_Input) && isNaN(second_Input)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (
    parseFloat(first_Input) < -1000000 &&
    parseFloat(second_Input) < -1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(first_Input) > 1000000 &&
    parseFloat(second_Input) > 1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: `The product of given two numbers ${first_Input} * ${second_Input}`,
      result: parseFloat(first_Input) * parseFloat(second_Input),
    };
  }

  res.end(JSON.stringify(response));
});

app.post("/divide", (req, res) => {
  console.log(req.body);
  const first_Input = req.body.num1;
  const second_Input = req.body.num2;

  if (isNaN(first_Input) && isNaN(second_Input)) {
    response = {
      status: "error",
      message: "Invalid data types",
    };
  } else if (second_Input == 0) {
    response = {
      status: "error",
      message: "Cannot divide by zero",
    };
  } else if (
    parseFloat(first_Input) < -1000000 &&
    parseFloat(second_Input) < -1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) < -1000000
  ) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    parseFloat(first_Input) > 1000000 &&
    parseFloat(second_Input) > 1000000 &&
    parseFloat(first_Input) + parseFloat(second_Input) > 1000000
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: `The division of given two numbers ${first_Input} / ${second_Input}`,
      result: parseFloat(first_Input) / parseFloat(second_Input),
    };
  }

  res.end(JSON.stringify(response));
});

app.listen(port, () => console.log(`Server is UP and App listening on port ${port}!!`));

module.exports = app;

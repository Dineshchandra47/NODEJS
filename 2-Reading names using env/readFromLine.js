const readline = require("readline");

const name = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

name.question("Please give me your name ", (res) => {
  console.log("Hello", res);
  name.close();
});

// OUTPUT:
// After running the file
// Please give your name [Enter the name here Dinesh]
// Hello Dinesh

// Please give your name [Enter the name here Ravi]
// Hello Ravi

// Please give your name [Enter the name here sailesh]
// Hello sailesh

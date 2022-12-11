const fs = require("fs");
const http = require("http");

content = "<h1>Hello world</h1> \n<p> Hii, my name is Dinesh </p> \n<p>I'm learning NODEJS</p>";

const createFile = fs.writeFile("index.html", content, (data, err) => {
  console.log("File is created");
  if (err) throw err;
});

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    if (err) {
      res.write("PAGE NOT FOUND");
      console.log(err);
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, () => console.log("The server is up and running at 3000"));

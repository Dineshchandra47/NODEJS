const http = require("http");
const url = require("url");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("Hello there, Welcome to Dominos!");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.end("Error 404, status not found");
  }
}
httpServer.listen(8081, () => {
  console.log("Server is up and running at PORT 8081");
});
// module.exports = httpServer;

const app = require("express")();
const https = require("https");
const fs = require("fs");

const port = 8888;

var options = {
  key: fs.readFileSync("/Users/yiwenl/Development/openssl/privkey.pem"),
  cert: fs.readFileSync("/Users/yiwenl/Development/openssl/cert.pem"),
  ca: fs.readFileSync("/Users/yiwenl/Development/openssl/cert.pem"),

  requestCert: false,
  rejectUnauthorized: false,
};

const server = https.createServer(options, app);
server.listen(port);

const io = require("socket.io")(server, {
  cors: {
    origin: "https://localhost:8080/", // Allow your client's origin
    methods: ["GET", "POST"], // Allowed request methods
    allowedHeaders: ["my-custom-header"],
    credentials: true, // Allow credentials (cookies, authentication data)
  },
});

// Rest of your server code...

io.sockets.on("connection", function (socket) {
  console.log("Client connected", socket.id);
  // code goes here...
});

app.get("/", function (request, response) {
  // code goes here...
});

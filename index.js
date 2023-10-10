import { createServer } from "http";
import { Server } from "node-static";

const PORT = 80;
const fileServer = new Server("./public");
createServer((req, res) => {
  fileServer.serve(req, res);
  console.log("Server requested from", new Date());
}).listen(PORT);
console.log("Server started");

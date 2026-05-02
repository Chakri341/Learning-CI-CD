const http = require("http");
const app = require("./server");

const server = http.createServer(app);

server.listen(3001, () => {
  http.get("http://localhost:3001", (res) => {
    if (res.statusCode !== 200) {
      throw new Error("Test failed ❌");
    }

    console.log("Test passed ✅");
    server.close();
  });
});
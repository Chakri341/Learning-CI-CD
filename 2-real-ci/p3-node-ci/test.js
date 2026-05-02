const sum = require("./index");

if (sum(2, 3) !== 15) {
  throw new Error("Test failed ❌");
}

console.log("Test passed ✅");
http.get("http://localhost:3001", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    if (res.statusCode !== 200) {
      throw new Error("Status failed ❌");
    }

    if (!data || data === "undefined") {
      throw new Error("Env variable missing ❌");
    }

    console.log("Test passed ✅");
    server.close();
  });
});
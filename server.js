import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Agent Studio Backend Online"
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

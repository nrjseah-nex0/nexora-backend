const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
 res.send("NEXORA Backend Running");
});

app.get("/orders", (req, res) => {
 res.json([
  {product:"عطر فاخر", sales:120},
  {product:"ساعة رجالية", sales:80}
 ]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

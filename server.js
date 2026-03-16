const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 NEXORA Backend is Running");
});

app.get("/products", (req, res) => {
  res.json([
    {name:"عطر فاخر", sales:120, price:250},
    {name:"ساعة رجالية", sales:80, price:300},
    {name:"نظارة شمسية", sales:65, price:150}
  ]);
});

app.get("/analytics", (req, res) => {
  res.json({
    monthlyRevenue: 12500,
    completedOrders: 210,
    topProduct: "عطر فاخر"
  });
});

app.listen(3000, () => {
  console.log("NEXORA backend running on port 3000");
});

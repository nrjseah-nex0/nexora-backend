const express = require("express")
const app = express()

app.use(express.json())

const campaigns=require("./routes/campaigns")
const analytics=require("./routes/analytics")
const products=require("./routes/products")
const webhook=require("./routes/webhook")

app.use(campaigns)
app.use(analytics)
app.use(products)
app.use(webhook)

app.listen(3000,()=>{
 console.log("🚀 NEXORA Backend Running")
})

const express = require("express")
const router = express.Router()

router.post("/webhook/orders",(req,res)=>{

 const order=req.body

 console.log("طلب جديد من سلة:",order)

 res.status(200).send("Webhook received")

})

module.exports = router

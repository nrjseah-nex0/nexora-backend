const express = require("express")
const router = express.Router()

router.get("/products",(req,res)=>{

 res.json([
  {name:"عطر فاخر",sales:120},
  {name:"ساعة رجالية",sales:80},
  {name:"نظارة شمسية",sales:65}
 ])

})

module.exports = router

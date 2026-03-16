const express = require("express")
const router = express.Router()

router.get("/analytics",(req,res)=>{

 res.json({
  monthlyRevenue:12500,
  completedOrders:210,
  topProduct:"عطر فاخر"
 })

})

module.exports = router

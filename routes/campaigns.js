const express = require("express")
const router = express.Router()

router.post("/campaign", (req,res)=>{

 const campaign=req.body

 console.log("حملة جديدة:",campaign)

 res.json({
  success:true,
  message:"تم إنشاء الحملة بنجاح"
 })

})

module.exports = router

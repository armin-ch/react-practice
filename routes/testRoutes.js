const router = require('express').Router()

router.get('/test', (req,res)=>{
  console.log('ping received 2')
  res.send({message: 'lol'})
})


module.exports = router

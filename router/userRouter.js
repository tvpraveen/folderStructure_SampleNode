const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")

router.post("/signup", (req,res)=>{
    userController.signup(req).then((data)=>{
        res.status(200).send(data)
    }).catch(err => res.status(500).send({
        message: err.message
    }))
})

module.exports = router
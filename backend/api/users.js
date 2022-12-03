const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

router.post('/new', async(req, res)=>{
    db.User.find({username: req.body.username})
    .then(async r => {
        console.log(r)
        if(!r){
            console.log("CREATING")
            const user = await db.User.create({
                username: req.body.username,
                password: await bcrypt.hash(req.body.password,10)
            })

            res.json({})
        }
        else{

            console.log("BREAKING")
            res.json({message: 'username already in use'})
        }
        
    })
})


router.post('/authenication', async (req, res) => {
    let user = await db.User.findOne({username: req.body.username})
    if(!user || !await bcrypt.compare(req.body.password, user.password)){
        res.json({message: 'wrong user info'})
    }
    else{
        console.log("Correct")
        req.session._id = user._id
        res.json({})
    }
})

router.get('/profile', async(req, res) => {
    res.json(req.currentUser)
})

module.exports = router
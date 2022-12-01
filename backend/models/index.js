// require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Recipe = require('./recipeModel')
module.exports.User = require('./userModel')
module.exports.Category = require('./categoryModel')


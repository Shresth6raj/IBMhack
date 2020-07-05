var mongoose = require("mongoose")

var ServiceSchema = new mongoose.Schema({
    name: String,
    rate: Number,
    seller: {
        type: mongoose.Schema.Types.ObjectId,             
        ref: "User",
    },
})
module.exports = mongoose.model("Service",UserSchema);
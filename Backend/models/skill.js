const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    item_id : {
        type : Number,
        required: true
    },
    item_text : {
        type : String,
        required: true
    }
})
module.exports = mongoose.model('Skills',SkillSchema)
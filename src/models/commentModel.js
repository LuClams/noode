const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: "Le message est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
        type: String
    }
})

module.exports = mongoose.model('Comment', commentSchema);
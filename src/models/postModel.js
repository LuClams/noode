const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: "Le contenu est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema);
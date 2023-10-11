const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema ({
    note: {
        type: Number,
        require: true
    },
    music_id: {
        type: String,
        require: "Le contenu est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Vote', voteSchema);
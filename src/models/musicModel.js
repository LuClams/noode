const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema ({
    firstname: {
        type: String,
        require: true
    },

    lastname: {
        type: String,
        require: true
    },

    url: {
        type: URL,
        require: true
    },
    
    created_at: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Music', musicSchema);
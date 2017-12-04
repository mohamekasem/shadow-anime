const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

let episode = new Schema ({
    title: {type: String, require: true},
    views: {type: Number, default: "0"},
    servers: Array,
    anime_id: String
});


module.exports = mongoose.model('Episode', episode);
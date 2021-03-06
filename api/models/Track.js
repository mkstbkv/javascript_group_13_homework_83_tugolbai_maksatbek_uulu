const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    is_published: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;
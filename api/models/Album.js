const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    release: {
        type: String,
        required: true
    },
    image: String
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
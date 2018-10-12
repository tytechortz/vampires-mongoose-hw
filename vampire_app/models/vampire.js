const mongoose = require('mongoose');


const vampireSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
    },
    hair_color: {
        type: String,
        default: "blonde"
    },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: {
        type: Number,
        min: 0
    }, 
});
// First argument, is what we are naming our collection,
// mongodb I believe will lowercase, and pluralize
const Vampire = mongoose.model('Vampire', vampireSchema);
module.exports = Vampire
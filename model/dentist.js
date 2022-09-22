const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dentistSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }

},
{timestamp: true});



//Exporting Database
const DentistSchema= mongoose.model("dentist",dentistSchema);
module.exports = DentistSchema;
//Initalization of Database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Database
const appointmentSchema = new Schema({
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
    date: {
        type: String,
        format: "%Y-%m-%d",
        default: Date.now
    },
    time: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    current: {
        type: String,
        required: true
    },
    dentist: {
        type: String
    },
    message: {
        type: String
    },
    status: {
        type: String
    }

},
{timestamp: true});



//Exporting Database
const Appointment = mongoose.model("appointment",appointmentSchema);
module.exports = Appointment;
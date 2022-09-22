const { render } = require('ejs');
const Appointment = require('../model/appointment');
const validation = require('../controllers/validation');
const Dentist = require('../model/dentist');

//Get all books
const appointmentIndex = async(req, res) =>{
    let appointment = await Appointment.find().sort({date: 1})
    let dentist = await Dentist.find().sort({createdAt: -1})
    let today = new Date().toISOString().slice(0, 10)

    if(!appointment && !dentist) return res.status(404).send('Cannot find data');
    res.render('index', {title: "Home Admin", appointment: appointment, dentist: dentist, today:today})
        
}

//Find books
const appointmentFind = (req,res) => {
    let id = req.params.id;
    Appointment.findById(id)
    .then((result)=>{
        res.render('find', {title: "find", appointment: result})
    })
    .catch((err)=>{
        console.log(err)
    })
}

//Add books
const appointmentAdd = async (req, res) => {
    // console.log(req.body);
    const {error} = validation(req.body);
    const appointment = new Appointment({
        firstname: req.body.firstname,
		lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
		date: req.body.date,
		time: req.body.time,
		service: req.body.service,
        current: req.body.current,
        dentist: req.body.dentist,
        message: req.body.message,
        status: req.body.status
    })
    // const alert = error.details[0].message;
    //res.send(error.details[0].message);
    //check if the inputs are valid 
    if(error) { return  res.render('home', {title: 'Home', alert: error.details[0].message});}
    // //check existing email 
    // const userEmail = await User.findOne({email: req.body.email})
    //res.send(userEmail); 
    // if(userEmail) return res.status(404).send("Email Already Exist") 
    else { const savedAppointment = await appointment.save();
    res.status(200).redirect('/');
    console.log('New appointment is added');
    }
    
    // const appointment = new Appointment(req.body)
    // appointment.save()
    // .then(result => res.redirect("/"))
    // .catch(err => console.log(err))
}

//Update books
// const appointment_update = (req, res) => {
//     let id = req.params.id;
//     Appointment.findById(id).then((result)=>{
//         res.render('update',{appointment: result, title: "Book Details"})
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
const appointmentUpdate = async (req, res) => {
    let id = req.params.id
    let appointmentToUpdate = await Appointment.findByIdAndUpdate(id, {
    
        dentist: req.body.dentist    
    })
    if(!appointmentToUpdate) return res.status(404).send('Patient is not updated');
    res.redirect('/admin')
        
}

const appointmentDelete = async (req, res)=>{
    let id = req.params.id
    let deleteAppointment = await Appointment.findByIdAndDelete(id)
    if(!deleteAppointment){
        return res.status(404).send('Cannot delete the Appointment').redirect('/admin')
    }
    else{
        return res.status(200).redirect('/admin');
    }
}

const appointmentAddPage = (req,res) => {
    res.render('add',{title: "Add Book"});

}

const statusUpdate = async (req, res) => {
    let id = req.params.id
    let statusToUpdate = await Appointment.findByIdAndUpdate(id, {
        status: req.body.status
    })
    if(!statusToUpdate ) return res.status(404).send('Status is not updated');
    res.redirect('/admin')
        
}


module.exports = {
    appointmentIndex,
    appointmentAdd,
    appointmentFind,
    appointmentDelete,
    appointmentAddPage,
    appointmentUpdate,
    statusUpdate
}

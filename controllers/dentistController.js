const { render } = require('ejs');
const Dentist = require('../model/dentist');

const dentistIndex = (req, res) =>{
    Dentist.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('dentist', {title: "List Of Dentist", dentist: result})
    })
    .catch((err)=>{
        console.log(err);
    })
}

//Add dentist
const dentistAdd = async (req, res) => {
    // // console.log(req.body);
    // const {error} = validation(req.body);
    // const appointment = new Appointment({
    //     firstname: req.body.firstname,
	// 	lastname: req.body.lastname,
    //     phone: req.body.phone,
    //     email: req.body.email,
	// 	date: req.body.date,
	// 	time: req.body.time,
	// 	service: req.body.service,
    //     current: req.body.current,
    //     dentist: req.body.dentist,
    //     message: req.body.message
    // })
    // //res.send(error.details[0].message);
    // //check if the inputs are valid 
    // if(error) return res.status(400).send(error.details[0].message);
    // // //check existing email 
    // // const userEmail = await User.findOne({email: req.body.email})
    // //res.send(userEmail); 
    // // if(userEmail) return res.status(404).send("Email Already Exist") 
    // try {
    //     const savedAppointment = await appointment.save();
    //     res.status(200).redirect('/');
    //     console.log('New appointment is added');
    // } catch (error) {
    //     res.status(400).send(error);
    // }
    const dentist = new Dentist(req.body)
    dentist.save()
    .then(result => res.redirect("/dentist"))
    .catch(err => console.log(err))
}

const dentistDelete = async (req, res)=>{
    let id = req.params.id
    let deleteDentist = await Dentist.findByIdAndDelete(id)
    if(!deleteDentist){
        return res.status(404).send('Cannot delete the Dentist').redirect('/dentist')
    }
    else{
        return res.status(200).redirect('/dentist');
    }
}

const dentistUpdate = async (req, res) => {
    let id = req.params.id
    let dentistToUpdate = await Dentist.findByIdAndUpdate(id, {
        lastname: req.body.lastname,
        firstname: req.body.firstname,  
        phone: req.body.phone,  
        email: req.body.email,  
        speciality: req.body.speciality,  
    })
    if(!dentistToUpdate) return res.status(404).send('Dentist is not updated');
    res.redirect('/dentist')
        
}


module.exports = {
    dentistIndex,
    dentistAdd,
    dentistDelete,
    dentistUpdate
}

const express = require("express")
const Appointment = require("../model/appointment")
const appController = require('../controllers/appointmentController');
const dentistController = require('../controllers/dentistController');
const router = express.Router()

router.get("/", (kahilingan, tugon)=>{
    tugon.status(201).render("home", {title:"Almazan-Padlan Dental Clinic"})
})

router.get("/about_us", (req, res)=>{
    res.status(201).render("about_us", {title:"About Us: Almazan-Padlan Dental Clinic"})
})

router.get("/services_basic", (req, res)=>{
    res.status(201).render("services_basic", {title:"Basic Services: Almazan-Padlan Dental Clinic"})
})

router.get("/services_specialized", (req, res)=>{
    res.status(201).render("services_specialized", {title:"Specialized Services: Almazan-Padlan Dental Clinic"})
})

//appointment
router.get('/admin', appController.appointmentIndex);

router.get('/appointment/:id', appController.appointmentFind)

router.post('/appointment', appController.appointmentAdd)

router.delete('/appointment/:id', appController.appointmentDelete)

router.get('/add', appController.appointmentAddPage)

router.post('/update/:id', appController.appointmentUpdate)

router.post('/updates/:id', appController.statusUpdate)


//dentist
router.get('/dentist', dentistController.dentistIndex);

router.post('/dentist', dentistController.dentistAdd);

router.delete('/dentist/:id', dentistController.dentistDelete);

router.post('/updatedentist/:id', dentistController.dentistUpdate)

router.get('/admin', dentistController.dentistIndex);

//service



module.exports = router;
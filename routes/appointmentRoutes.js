const express = require("express")
const Appointment = require("../model/appointment")
const appController = require('../controllers/appointmentController');
const router = express.Router()

router.get("/", (kahilingan, tugon)=>{
    tugon.status(201).render("home", {title:"HOME"})
})

router.get("/about_us", (req, res)=>{
    res.status(201).render("about_us", {title:"ABOUT US"})
})

router.get("/services_basic", (req, res)=>{
    res.status(201).render("services_basic", {title:"BASIC SERVICES"})
})

router.get("/services_specialized", (req, res)=>{
    res.status(201).render("services_specialized", {title:"SPECIALIZED SERVICES"})
})


router.get('/admin', appController.appointmentIndex);

router.get('/appointment/:id', appController.appointmentFind)

router.post('/appointment', appController.appointmentAdd)

router.delete('/appointment/:id', appController.appointmentDelete)

router.get('/add', appController.appointmentAddPage)

router.post('/update/:id', appController.appointmentUpdate)

module.exports = router;
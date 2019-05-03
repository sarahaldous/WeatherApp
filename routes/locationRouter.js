const express = require('express')
// const Weather = require('../models/user.js')
const weatherRouter = express.Router()
const Locations = require('../models/Locations.js')
const locationRouter = express.Router()

locationRouter.get('/', (req, res, next) => {
    Locations.find({user: req.user._id}, (err, locations) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(locations)
    })
})
// Add a location to the user's saved locations
locationRouter.post('/', (req, res, next) => {
   const newLocation = new Locations(req.body)
   newLocation.user = req.user._id
   newLocation.save((err, userLocation) => {
       if(err){
           res.status(500)
           return next(err)
       }
       return res.status(201).send(userLocation)
   })
})

//Delete a user's saved location
locationRouter.delete("/:_id", (req, res, next) => {
    console.log(req.params._id)
   Locations.findOneAndRemove({_id : req.params._id}, (err, deletedLocation) => {
       if(err) {
           res.status(500)
           return next(err)
       }
       return res.status(202).send(`${deletedLocation.city} removed.`)
   })
})

module.exports = locationRouter
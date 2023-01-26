const routes = require('express').Router();
const userController = require('../controller/userController')

//to check api is working
routes.get('/',userController.getIndex)

//Retrieve a list of all habits
routes.get('/habit',userController.getAllHabits)
// Retrieve a specific habit by its ID
routes.get('/habit/:id',userController.getHabitById)
//Create a new habit.
routes.post('/habit',userController.addHabit)
//Update a specific habit by its ID
routes.put('/habit/:id',userController.updateHabit)
//Delete a specific habit by its ID
routes.delete('/habit/:id',userController.deleteHabit)


module.exports = routes;
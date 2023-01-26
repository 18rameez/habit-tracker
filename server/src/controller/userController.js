const express = require('express');
const { ERROR400, ERROR404, ERROR500, ERROR503 } = require('../util/error');
const getDbConnection = require('../util/database').getDbConnection;


exports.getIndex = (req,res,next) => {

  res.status(200).json({status: 'API is running'})
}

exports.getAllHabits = (req,res,next) => {

    console.log("reached");
    const db = getDbConnection();
    db.query("select * from habits", (err, result) => {
        if(err){
            ERROR500.detail = err.code;
          res.status(500).json(ERROR500)
        }else if(result.length == 0){
          res.status(404).json(ERROR404)  
        }else {
            res.status(200).json(result)
        }
       
    })
}

exports.getHabitById = (req, res, next) => {

}

exports.addHabit = (req,res,next) => {

    
}

exports.updateHabit = (req,res,next) => {

    
}

exports.deleteHabit = (req,res,next) => {

    
}
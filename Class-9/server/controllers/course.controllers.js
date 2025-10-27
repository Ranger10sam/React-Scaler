const Course = require('../models/course.model')

async function createCourse(req, res){
    const course = await Course.create({
        name:req.body.name,
        instructor:req.body.instructor,
        ratings:req.body.ratings,
        isActive:req.body.isActive
    })

    res.status(201).json(course)
}

module.exports = {
    createCourse
}
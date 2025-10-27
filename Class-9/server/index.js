const express = require('express');
const dbConn = require('./dbConfig')
const Course = require('./models/course.model')
const CourseController = require('./controllers/course.controllers')

const app = express()
dbConn.connectDb()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello')
})

// Creating a course
app.post('/course', CourseController.createCourse)

app.listen(8002, ()=>{
    console.log('server started')
})
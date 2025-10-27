const express = require('express');


const app = express()

app.use(express.json())

const courses = [
    {
        id: 1,
        name: 'Java',
        instructor: 'Sam',
        ratings: 4.8,
        isActive: true
    },{
        id: 2,
        name: 'Javascript',
        instructor: 'Mrinal',
        ratings: 4.9,
        isActive: true
    },{
        id: 3,
        name: 'Party',
        instructor: 'Yo Yo Honey Singh',
        ratings: 4.0,
        isActive: true
    },

]

app.get('/topics', (req, res)=>{
    res.send("Hello from Topics")
})

app.get('/topics/courses', (req, res)=>{
    res.send(courses)
})

app.get('/topics/courses/:id', (req, res)=>{
    let course = courses.find((course)=>course.id===parseInt(req.params.id))
    if(!course){
        res.send('Error 404')
    }
    res.send(course)
})

app.post('/topics/courses', (req, res)=>{
    let course = {
        id:req.body.id,
        name:req.body.name,
        instructor:req.body.instructor,
        ratings:req.body.ratings,
        isActive:req.body.isActive
    }
    courses.push(course)
    res.send(course)
})

app.put('/topics/courses/:id', (req, res)=>{
    let course = courses.find((course)=>course.id===parseInt(req.params.id))
    course.isActive = req.body.isActive

    res.send(course)
})

// app.delete('/topics/courses/:id', (req, res)=>{
//     let course = courses.find((course)=>course.id===parseInt(req.params.id))

//     courses.delete(course)
//     res.send(course)
// })

app.listen(8001)
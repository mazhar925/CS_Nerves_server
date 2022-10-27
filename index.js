const express = require('express');
const app = express();
const courses = require('./data/courses.json');
const coursesDetails = require('./data/details.json');
const cors = require('cors');

const port = process.env.PORT || 5000;


app.get('/courses', (req, res)=>{
    res.send(courses);
}

)
app.get('/details/:id', (req, res)=>{
    const id = req.params.id;
    const course = coursesDetails.find(n => n.id === id)
    res.send(course)

})

app.listen(port)
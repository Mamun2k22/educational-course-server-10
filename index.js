const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const courses = require('./Data/courses.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Course Details Running');
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(n => n._id === id)
    res.send(singleCourses)
})
app.get("/courses/pd/:id", (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(n => n._id === id)
    res.send(singleCourses)
})
app.listen(port, () => {
    console.log('Course Details Server running on', port);
})

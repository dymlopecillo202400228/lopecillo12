// run `node index.js` in the terminal

const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const students =[ 
    {
        Id : 1,
        name: "gaton",
        yearlevel : 1,

    }
]




app.get('/api/student', (req, res) => {
    res.json(students)
})


app.post('/api/student', (req, res) => {
    const {name , yearlevel} = req.body
    const  newStudent = {name, yearlevel}
    students.push(newStudent)

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    })
})

    
app.listen(port, () => {
    console.log(`server reunning on https://localhost:${port}`)
})
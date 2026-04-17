const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))


let students = [ 
    {
        id: 1,
        name: "Gaton",
        yearlevel: 1
    },
    {
        id: 2,
        name: "Lopez",
        yearlevel: 2
    },
    {
        id: 3,
        name: "Santos",
        yearlevel: 3
    }
]


app.get('/api/students', (req, res) => {
    res.json(students)
})


app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" })
    }

    const student = students.find(s => s.id === id)

    if (!student) {const express = require('express')
    const path = require('path')
    const cors = require('cors')
    
    const app = express()
    const port = 3000
    
    app.use(cors())
    app.use(express.json())
    app.use(express.static(path.join(__dirname, 'public')))
    
    // DATA
    let students = [
        { id: 1, name: "Gaton", yearlevel: 1 },
        { id: 2, name: "Lopez", yearlevel: 2 },
        { id: 3, name: "Santos", yearlevel: 3 }
    ]
    
    
    app.get('/api/students', (req, res) => {
        res.json(students)
    })

    app.get('/api/students/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const student = students.find(s => s.id === id)
    
        if (!student) return res.status(404).json({ message: "Student not found" })
    
        res.json(student)
    })
    
    
    app.post('/api/students', (req, res) => {
        const { name, yearlevel } = req.body
    
        if (!name || !yearlevel) {
            return res.status(400).json({ message: "Name and yearlevel required" })
        }
    
        const newStudent = {
            id: students.length ? students[students.length - 1].id + 1 : 1,
            name,
            yearlevel
        }
    
        students.push(newStudent)
    
        res.status(201).json(newStudent)
    })
    

    app.put('/api/students/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const { name, yearlevel } = req.body
    
        const student = students.find(s => s.id === id)
        if (!student) return res.status(404).json({ message: "Student not found" })
    
        if (name) student.name = name
        if (yearlevel) student.yearlevel = yearlevel
    
        res.json(student)
    })
    
   
    app.delete('/api/students/:id', (req, res) => {
        const id = parseInt(req.params.id)
    
        const index = students.findIndex(s => s.id === id)
        if (index === -1) return res.status(404).json({ message: "Student not found" })
    
        const deleted = students.splice(index, 1)
    
        res.json(deleted[0])
    })
    
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
        return res.status(404).json({ message: "Student not found" })
    }

    res.json(student)
})


app.post('/api/students', (req, res) => {
    const { name, yearlevel } = req.body

    if (!name || !yearlevel) {
        return res.status(400).json({ message: "Name and yearlevel are required" })
    }

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        yearlevel
    }

    students.push(newStudent)

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    })
})


app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { name, yearlevel } = req.body

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" })
    }

    const student = students.find(s => s.id === id)

    if (!student) {
        return res.status(404).json({ message: "Student not found" })
    }

    if (name) student.name = name
    if (yearlevel) student.yearlevel = yearlevel

    res.json({
        message: "Student updated successfully",
        student
    })
})


app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" })
    }

    const index = students.findIndex(s => s.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" })
    }

    const deletedStudent = students.splice(index, 1)

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    })
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
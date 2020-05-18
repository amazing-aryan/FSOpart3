const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons);
})

app.get('/info', (request, response) => {
    const size = persons.length
    const msg = `Phonebook has info for ${size} people`
    const date = new Date()
    const info = `<div>${msg}</br>${date}</div>`
    response.send(info);
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end();
    }
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

generateId = () => Math.round(Math.random()*1000000000)

app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body.name || !body.number) return res.status(400).json({
        error: 'incomplete information, pls send full info'
    })

    if(persons.find(person => person.name === body.name) !== undefined) {
        return res.status(400).json({
            error: 'name already exists'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    
    persons = persons.concat(person)
    res.json(person)
})

PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running...");
})

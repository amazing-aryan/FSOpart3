require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

morgan.token('data', (tokens, req,res,) => {
    return [
        req.method, 
        req.originalUrl, 
        res.statusCode, 
        req.headers['content-length'], '-',
        tokens['response-time'](req,res), 'ms',
        JSON.stringify(req.body)
    ].join(' ')
})

app.use(express.json())
app.use(morgan('data', {skip: (req,res) => req.method !== 'POST'}))
app.use(cors())
app.use(express.static('build'))

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
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    const size = persons.length
    const msg = `Phonebook has info for ${size} people`
    const date = new Date()
    const info = `<div>${msg}</br>${date}</div>`
    response.send(info);
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(note => {
        res.json(note)
    })
    .catch(error => {
        console.log(error)
        res.status(404).end()
    })
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

    const person = new Person({
        name: body.name,
        number: body.number,
    })
    
    person.save().then(savedContact => {
        res.json(savedContact)
    })
})

PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Server is running...");
})

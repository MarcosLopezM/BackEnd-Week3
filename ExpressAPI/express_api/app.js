// Usando objeto express
const express = require('express');

// App de express
const app = express();
app.use(express.json()); // Indicamos que usaremos JSON

// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;

// HTTP Methods
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);
    const explorer1 = {id: 1, name: "Marcos1"}
    const explorer2 = {id: 2, name: "Marcos2"}
    const explorer3 = {id: 3, name: "Marcos3"}
    const explorer4 = {id: 4, name: "Marcos4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers)
})

// GET: Crea un endpoint que regresa un explorer por su id
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id: ${req.params.id}`);
    const explorer = {id: 1, name: "Marcos"}
    res.status(200).json(explorer)
})

// POST: Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body; // Parámetros de un cliente
    res.status(201).json({message: 'Created'})
})

// PUT: Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Updating explorer with id ${req.params.id}`);
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: 'Updated!'})
})

// DELETE: Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: 'Deleted!'})
})

// Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
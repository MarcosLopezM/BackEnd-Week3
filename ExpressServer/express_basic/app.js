// Usando objeto express
const express = require('express');

// App de express
const app = express();

// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!');
})

/*
    Respondiendo texto
    localhost:3000/LaunchX
*/
app.get('/LaunchX', (req, res) => {
    res.send('Bienvenidos a LaunchX')
})

// Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
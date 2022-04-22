// Usando objeto express
const express = require('express');

// App de express
const app = express();
app.use(express.json()); // Indicamos que usaremos JSON

// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;

// Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
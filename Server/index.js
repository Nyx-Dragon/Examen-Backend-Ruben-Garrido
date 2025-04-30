const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

// Ejercicio 1 - Devolver comida aleatoria
app.get('/comida', (req, res) => {
    const comidas = 
    [
     'Omuraice', 

     'Sushi', 

     'Onigiri',
    ];
    const comidaRamdom = comidas[Math.floor(Math.random() * comidas.length)];
    res.json({ comida: comidaRamdom });
});

// Ejercicio 2 - Min y Max
let numeros = [];

app.post('/minmax', (req, res) => {
    const numero = req.body.number;
  
    numeros.push(numero);
  
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
  
    res.json({ min: minimo, max: maximo });
  });
  

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Ejercicio 3 - Corrección del endpoint

/* 
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${userID}`;

    db.query(sql, userId, (error, result) => {
        if (error) return res.status(500).send('Error al eliminar el usuario.');
        res.send(`User ${userId} deleted from the db.`);
    });
});
*/
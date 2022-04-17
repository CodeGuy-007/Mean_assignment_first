// import express module using require and store it in const variable named express
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('This is Akshat from department of Information Technology at GNDEC'))

app.listen(3000, () => console.log('Server running http://localhost:3000'))





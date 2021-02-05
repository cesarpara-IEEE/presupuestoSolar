const express = require('express')
const pdf = require('express-pdf')
const path = require('path')
const app = express();

let contenido = `
<h1>Esto es un test</h1>
<p> Estoy generando PDF </p>
`

app.use(pdf)

app.use('/pdfPresupuesto', (req, res) => {
    res.pdfFromHTML({
        filename: 'Presupuesto',
        html: path.resolve(__dirname, './tabla.html')
    })
})


app.get('/', (req, res) => {
    res.send('Hola a todos')
}) 

app.get('/about', (req, res) => {
    res.send('Aui otra ruta la ruta about')
   
})


app.listen(3000, () =>{
    console.log('Server en el puerto 3000');
})
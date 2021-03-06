const express = require('express')
const pdf = require('express-pdf')
const path = require('path')
const app = express();

let datos = ``

app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(pdf)

app.use('/pdfPresupuesto', (req, res) => {
    res.pdfFromHTML({
        filename: 'Presupuesto.pdf',
        htmlContent: datos,
    })
})


app.get('/', (req, res) => {
    res.render('tabla.html', {title: 'Inicio'}, (err, data) => {
        datos = data
        res.send(data)
        console.log(data)
    })

}) 

app.get('/about', (req, res) => {
    res.send('Aui otra ruta la ruta about')
   
})


app.listen(3000, () =>{
    console.log('Server en el puerto 3000');
})
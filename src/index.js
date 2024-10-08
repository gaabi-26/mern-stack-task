const express = require('express')
const morgan = require('morgan')
const path = require('path') // Este modulo une los directorios sin importar la plataforma de ejecucion
const { mongoose } = require('./database')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000) // Seteando los posibles puertos

// Middlewares
app.use(morgan('dev')) 
app.use(express.json()) // Funcion para que el servidor pueda entender el formato .json

// Routes
app.use('/api/tasks', require('./routes/task.routes'))

// Static files
app.use(express.static(path.join(__dirname, '/public')))

// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
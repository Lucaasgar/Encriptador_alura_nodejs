import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

// IMPORTO LAS RUTAS DESDE LA CARPETA ROUTES
import indexRouter from './routes/index.js'

const app = express()
const PORT = 3000;

// RUTA ABSOLUTA
const __dirname = dirname(fileURLToPath(import.meta.url))

// INDICO LA RUTA DE LA CARPETA DE VIEWS
app.set('views', join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(indexRouter)

// INDICO LA RUTA ABSOLUTA DE LA CARPETA PUBLIC
app.use(express.static(join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

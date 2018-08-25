import express  from 'express'
import cors from 'cors'
import mongoose from   'mongoose'
import  bodyParser from 'body-parser'
import config  from './config'
import Database from  './database'
import devRouter from  './routes/developers'


const app = express()
const options={
  origin:'*',
  optionsSuccessStatus:200
}

app.use(cors(options));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',devRouter)
app.listen(config.port, () => console.log(`Microservice is listening on port ${config.port}`))


module.exports = app; 
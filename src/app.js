import express from 'express'
import { readDate } from './services/readData.js'
import { modelQuery } from './Setencias/ModelQuery.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
setInterval(()=>{
    modelQuery()
    readDate()
}, 5000)

export default app

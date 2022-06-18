import express from 'express'
import { readDate } from './services/readData.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
setInterval(()=>{
    readDate()
}, 5000)

export default app

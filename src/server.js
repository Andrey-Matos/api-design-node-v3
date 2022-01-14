import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')             // !!!
app.use(cors())                         // Cross origin resource sharing
app.use(json())                         // Get request body easily
app.use(urlencoded({ extended: true })) // Add params to URL com "?"
app.use(morgan('dev'))                  // Logging

app.get('/', (req, res) => {
  res.send('hemlo :')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Ok')
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server on :3000')
  })
}

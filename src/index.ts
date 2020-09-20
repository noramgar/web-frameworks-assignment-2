import express from 'express';
import path from 'path';
import { json, urlencoded } from 'body-parser'


import User from './resources/user/user.model'
import userRouter from './resources/user/user.router'

const app = express()
const port = 3000

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

app.use('/User', userRouter)

// Get all users
app.get('/Users', (req, res) => {
  res.json(User.users)
})

// Serve help page
app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname + '/public/help.html'))
  res.sendFile('./public/help.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
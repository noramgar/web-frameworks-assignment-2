import express from 'express';
import path from 'path';

import User from './resources/user/user.model'
import userRouter from './resources/user/user.router'

const app = express()
const port = 3000

app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

app.use('/User', userRouter)

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/public/help.html'))
  res.sendFile('./public/help.html', { root: __dirname });
})

// Get all users
app.get('/Users', (req, res) => {
  res.send(User.users)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// for testing
let bob = new User('bob42', 'Bob', 'Griffin', 'bob@mail.com', 'pass123');
bob.save();

let sally = new User('sally23', 'Sally', 'Turner', 'sally@gmail.com', 'hunter123');
sally.save()


console.log(bob.lastName);
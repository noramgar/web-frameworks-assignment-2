import express from 'express';
import path from 'path';
import { json, urlencoded } from 'body-parser'

import User from './resources/user/user.model'
import userRouter from './resources/user/user.router'

const app = express()
const port = 3000

app.set('view engine','ejs');
app.set('views','views');

app.use(json())
app.use(urlencoded({ extended: true }))

app.use(express.static(path.join(process.cwd(),'public')));

app.use('/User', userRouter)

// Get all users
app.get('/Users', (req, res) => {
  res.json(User.users)
})

// Serve CRUD page for users
app.get('/crud', (req, res) => {
  res.render('users', { users: User.users });
})

// Serve help page
app.get('*', (req, res) => {
  res.sendFile('public/help.html', { root: process.cwd() });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

// create users for testing
let jose = new User('jgomez', 'Jose', 'Gomez', 'jose@josecgomez.com', 'pass123!');
jose.save();

let mike = new User('mrooney', 'Mike', 'Rooney', 'mike@gmail.com', '#toastr312');
mike.save()

let u1 = new User('thewillsmith', 'Will', 'Smith', 'wsmith@gmail.com', 'secret02384');
u1.save();

let u2 = new User('so_Griffy', 'Sally', 'Griffin', 'sally@mailer.com', 'hunter123');
u2.save()

let u3 = new User('no_ram', 'Noe', 'Ramirez', 'noe@ramirez.com', 'thePassword77');
u3.save();

let u4 = new User('testUser', 'Mister', 'Tester', 'tester@gmail.com', '*jfJF23Ud8Ni!');
u4.save()

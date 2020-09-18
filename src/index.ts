import express from 'express';
import path from 'path';

import User from './resources/user/User'

const app = express()
const port = 3000

//app.use('/', express.static('/public/help.html'));
//app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));


app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/public/help.html'))
  res.sendFile('./public/help.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let bob = new User('bob42', 'Bob', 'Griffin', 'bob@mail.com', 'pass123');
bob.save();

console.log(bob.lastName);

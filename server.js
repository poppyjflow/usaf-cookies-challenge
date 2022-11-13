const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(express.json());
app.use(cookieParser());

app.get("/login/:uname", (req, res) => {
  res.cookie('some_json', {userName: req.params.uname})
  res.status(200).send('Cookie Set for user: ' + req.params.uname)
})

app.get("/hello", (req, res) => {
  if(req.cookies.some_json.userName) res.status(200).send(`Welcome ${req.cookies.some_json.userName}!`);
  else res.status(200).send(`Not yet logged in!--${JSON.stringify(req.cookies)}`);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

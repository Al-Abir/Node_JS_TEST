const express = require('express');
const users = require('./mock.json');
const port = 3000;
const app = express();

app.get('/api/user', (req, res)=>{
     return  res.json(users); 
})
// server side rendaring always user browser

app.get('/user', (req, res)=>{

    const userS = `<ul>
       ${users.map((user)=> `<li> ${user.first_name}</li>`).join("")}
    </ul>`

    res.send(userS)
})
// dynamic route;

app.get('/api/user/:id',(req,res)=>{
    const id =Number(req.params.id);
    const user = users.find((user)=> user.id==id)
    res.json(user);

})
app.listen(port, ()=> `Server is running ${port} `)
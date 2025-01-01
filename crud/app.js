const express = require('express');
const app = express();
const usermodel = require('./models/user');
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.set('view engine', 'ejs');

app.get('/', async (req,res)=>{
  let allusers = await usermodel.find();
  res.render("users",{"users":allusers});
});


app.get('/create', (req,res)=>{
  res.render("index")
});


app.post('/create',(req,res)=>{
  const{image,name,username,email} = req.body;
  
  usermodel.create({
    image,
    name,
    username,
    email
  });
  
  res.redirect("/");
  
  
});


app.get('/delete/:id', async (req,res)=>{
  let del = await usermodel.findOneAndDelete({_id:req.params.id})
  res.redirect("/");
});




app.post('/update/:id', async (req,res)=>{
  const{image,name,username,email} = req.body;
  let update = await usermodel.findOneAndUpdate({_id:req.params.id},{image,name,username,email},{new:true});
  res.redirect("/");
  
  
});


app.get('/update/:id', async (req,res)=>{
  let allusers = await usermodel.findOne({_id:req.params.id});
  res.render("update",{"users":allusers});
});










app.listen(3000)
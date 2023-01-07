const express = require('express');
const {MongoClient} = require('mongodb')
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();


let PORT = 8000;
const url1 = "mongodb+srv://userman:passwordft@cluster.sikf9dz.mongodb.net/Register001?retryWrites=true&w=majority";
const client = new MongoClient(url1);


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.post('/login',async(req,res)=>{
	var tmail = req.body.email;
	var tpass = req.body.password;
	var data = new Object();
	data.email = tmail;
	const database = client.db('Register001');
	const users = database.collection('users');
	const userdata = await users.findOne(data);
	let jwtSecret = "iTSnOTsECRET";
	if(userdata!=null){
		if(userdata.password==tpass){
			const token = jwt.sign(data,jwtSecret,{algorithm:"HS256"});
			res.cookie('token',token,{httpOnly: true,sameSite:'strict'})
			res.send("Login Successful");}
		else
			console.log("Incorrect password");

		}


})





app.post('/register',async (req,res)=>{
	const database = client.db('Register001')
	const users = database.collection('users')
	users.insertOne(req.body)
	await client.close();
	res.redirect('http://localhost:3000/');
	
	// mongoose.connect(url1);
	// //mongoose.Promise = global.Promise;
	// var db=mongoose.connection;
	// db.on('error', console.error.bind(console, 'MongoDB connection error'));
	// const User = mongoose.model('User',{name:String,email:String,password:String,gender:String});
	// var userman = new User(req.body);
	// userman.save()
	
})

app.post('/subscribe',async (req,res)=>{
	const database = client.db('Register001')
	const subscribers = database.collection('subscribers')
	subscribers.insertOne(req.body)
	await client.close();
	res.redirect('http://localhost:3000/');
	
})


app.get('/',(req,res)=>{
	res.send("Hello World")
})

app.listen(PORT,()=>{
	console.log(`Server running at ${PORT}....`);
})
// const express=require("express");
// const users=require("./MOCK_DATA.json");
// const fs=require('fs');
// const app=express();
// const PORT=8000;
// app.use(express.urlencoded({extended:false}));
 
// // Sending html on clint browser
// app.get('/users',(req,res)=>{
//     const html=`<ul>
   
//     ${users.map(user=> `<li> ${user.first_name} </li>`).join("")}
   
//     </ul>`;
//     res.send(html);
//    })

// // Sending Rest Api on clint side
// app.get('/api/users',(req,res)=>{
//  res.send(users);
// })

// app.get('/api/users/:id',(req,res)=>{
// const id=Number(req.params.id);
// const user=users.find( (user)=> user.id===id)
//  res.send(user);
// })

// app.post('/api/users',(req,res)=>{
//     const body=req.body;
//     users.push({...body, id: users. length+ 1});
//     fs.writeFile("./MOCK_DATA.JSON",JSON.stringify(users),(err,data)=>{
//      return res.json({status:"success",id:users.length+1});

//     })
    
// })
// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({status:Pending});
// })
// app.delete('/api/users/:id',(req,res)=>{
//     return res.json({status:Pending});
// })


// app.listen(PORT,()=>console.log(`Server has Started at ${PORT}`));

const express=require("express");
const {connectMongoDb}=require("./connection");
// const {logReqRes}=require("./middlewares");
const router=require("./routes/user");
const app=express();
const PORT=8000;

connectMongoDb("mongodb://127.0.0.1:27017/project_01").then(()=>console.log("Mongoose connected ")).catch((err)=>console.log("Error",err));
app.use(express.urlencoded({extended:false}));

// app.use(logReqRes("log.txt"));
app.use("/api/users",router);

app.listen(PORT,()=>console.log(`Server Has Started at port ${PORT}`));


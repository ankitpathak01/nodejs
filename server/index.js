
// const http=require("http");
// const fs=require("fs");
// const myserver=http.createServer((req,res)=>{
// const log=`${Date.now()} ${req.url}:New Request found\n`;
// fs.appendFile('log.txt',log,(err,data)=>{
//     res.end("Hello From Server");

// })
  

// });
// myserver.listen(8000,()=>console.log("Server Started"));



// const http=require("http");
// const fs=require("fs");
// const url=require("url");

// const myserver=http.createServer((req,res)=>{
    
//     if(req.url==='/favicon.ico') return res.end();
// const log=`${Date.now()} : ${req.url}New Request found\n`;
// const myUrl=url.parse(req.url, true);
// console.log(myUrl);
// fs.appendFile('log.txt',log,(err,data)=>{
  
//     switch(myUrl.pathname){
//         case "/":
//             res.end("Home Page");
//         break;
//         case '/about':
//         // const username=myUrl.query.myname;
//         res.end(`Hi I am ankit`);
//         break;
//         case '/search':
//             const search=myUrl.query.search_query;
//             res.end('Here are your result' + search);
//         default:
//             res.end("404. Not Found");
//     }
    

// })
  

// });
// myserver.listen(8000,()=>console.log("Server Started"));

// const http=require("http");
// const fs=require("fs");
// const url=require("url");

//  const myServer=http.createServer((req,res)=>{
//     const log=`${Date.now} : ${req.method} ${req.url} New Requeste Found \n`;
//     const myUrl=url.parse(req.url ,true);
   
//     fs.appendFile('info.txt',log,(err,data)=>{
//     switch(myUrl.pathname){
//         case '/':
//             if(req.method==='GET'){
//                 res.end ("I am Home page");

//             }
//             break;

//             case '/signup':
//                 if(req.method==='GET') res.end ('This is a signup form');
//                 elseif(req.method==='POST')
//             {
//                 //DB
//                 res.end ('Signup Success');
//             }

//         default:
//             res.end('404 : Page not Found');   
//     }
//     })

//  })

//  myServer.listen(8000,()=>console.log('Server Started'));


// const http=require ('http');
// const express=require ('express');

// const app=express();

// app.get('/' ,(req,res)=>{
//  res.send('I am home page');
// })
// app.get('/about' ,(req,res)=>{
//  res.send('I am about page'+ "Hey" + req.query.name);
// })

// const myServer=http.createServer(app);

// myServer.listen(8000,()=>console.log('Server Started'));


// OR


const express=require ('express');

const app=express();

app.get('/' ,(req,res)=>{
 res.send('I am home page');
})
app.get('/about' ,(req,res)=>{
 res.send(`Hey ${req.query.name}`);
})



app.listen(8000,()=>console.log('Server Started'));
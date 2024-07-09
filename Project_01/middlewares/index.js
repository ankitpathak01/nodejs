const fs=require("fs");

async function logReqRes(fileName){
    return(req,res,next)=>{
        fs.appendFile(
            fileName,
            `\n${Date.now()} :  ${req.ip} ${req.method}: ${req.path}\n`,(err,date)=>{
            next();
        });

    };
}
module.exports={
    logReqRes,
};
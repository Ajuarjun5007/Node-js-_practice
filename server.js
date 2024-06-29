
// const os = require('os');
// const path = require('path');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
// console.log('-------')
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
//  calling some other fucntions from external file


// {type 1}
const {add,sub,mul,div} = require('./math');
// console.log(add(3,4));
// console.log(sub(3,4));
// console.log(mul(3,4));
// console.log(div(3,4));

// {type 2}

// console.log(add(3,4));
// console.log(sub(3,4));
// console.log(mul(3,4));
// console.log(div(3,4));

// ----------------------XXXXXXX---------------------------
     
// ===========SYNCHORONOUS FUNCTIONALITY=================

// const fs = require('fs');
// const path = require('path');

// // read file
// fs.readFile(path.join(__dirname,'files','start.txt'),'utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data); 
    
// })


// to caught error
// process.on('uncaughtException', err => {
//     console.error(`there was an uncaught error: ${err}`)
//     process.exit(1)
//   })


//   write file
// fs.writeFile(path.join(__dirname,'files','welcome.txt'),'welcome to node.js',(err)=>{
//     if (err) throw err;
//     console.log('write complete'); 
//     // fs.appendFile(path.join(__dirname,'files','welcome.txt'),'\n Keep learning',(err)=>{
//     //     if (err) throw err;
//     //     console.log('append complete'); 
//     // })
//     // fs.rename(path.join(__dirname,'files','welcome.txt'), path.join(__dirname,'files','greetings.txt'), (err)=>{
//     //     if (err) throw err;
//     //     console.log('rename complete'); 
//     // })
// })
// append file
// fs.appendFile(path.join(__dirname,'files','welcome.txt'),'\n Keep learning',(err)=>{
//         if (err) throw err;
//         console.log('append complete'); 
//     })

// rename file

// fs.rename(path.join(__dirname,'files','welcome.txt'), path.join(__dirname,'files','greetings.txt'), (err)=>{
//         if (err) throw err;
//         console.log('rename complete'); 
//     })

// ===========ASYNCHORONOUS FUNCTIONALITY=================
const path = require('path');
const fsPromises  = require('fs').promises

const fileOps  =async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf-8')
        console.log(data)
        await fsPromises.rename(path.join(__dirname,'files','welcome.txt'),path.join(__dirname,'files','greetings!.txt'))
        console.log('rename complete');
        // await fsPromises.unlink(path.join(__dirname,'files','start.txt'))
    }catch(err){
        console.error(err)
    }
   

}
fileOps();

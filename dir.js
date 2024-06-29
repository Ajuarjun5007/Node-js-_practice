const fs = require('fs');
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if (err) throw err;
        console.log('Directory Created')
    })
}
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if (err) throw err;
        console.log('Directory Created')
    })
}

process.on('uncaughtException',err =>{
    console.error(`there was an uncaught error:${err}`);
    process.exit(1);
})
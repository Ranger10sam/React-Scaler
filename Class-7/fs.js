const fileSystem = require('fs')

let content = "He he boi"
function read(){

    fileSystem.readFile('f1.txt', (err, data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("f1 read - "+data);
            //content += data
        }
    })   
}


function write(){
    fileSystem.appendFile('f1.txt', content, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("f1 wrote - "+content)
        }
    })
}

fileSystem.readFile('f1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("f1 read - "+data);
        write()
        read()
    }
}) 
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://samprit:0000@cluster0.pq23nki.mongodb.net/?appName=Cluster0')
//     .then(()=>{
//         console.log('db connected')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://samprit:0000@cluster0.fhch26u.mongodb.net/?appName=Cluster0')
        console.log('Db Connected')
    }catch(err){
        console.log(err)
    }
}

module.exports={
    connectDb
}
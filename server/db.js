const mongoose=require('mongoose')

const dbUri='mongodb+srv://Deepak:deepu123@cluster0.nnmu1uv.mongodb.net/employee_db?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbUri)

module.exports=()=>{
    return mongoose.connect(dbUri)
}


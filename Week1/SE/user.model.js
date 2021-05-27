const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const user =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20
    },

    lastName:{
        type:String,
        required:true,
        trim:true, 
        min:3,
        max:20       
        
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
   
    username:{
        type:Number,
        unique:true,
    },

},{timestamps:true});

user.virtual('password')
.set(function(password){
    
    this.hash_password=bcrypt.hashSync(password, 10)
    
});



user.methods={
    authenticate:async function(password){
        return await bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports=mongoose.model('user',user);
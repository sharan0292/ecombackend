const bcrypt=require("bcryptjs");
const mongoose=require("mongoose");
const userScheme = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user",
        },
    },
    { timestamps:true }

);
userScheme.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);  
     }
     next()
})
const User=mongoose.model("User",userScheme);


module.exports=User;



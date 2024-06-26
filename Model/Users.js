const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
          FullName:String,
          Email:{
            type:String,
            unique: true
        },
          PhoneNumber:{
            type:String,
            unique: true
        },
          Password:String,
          Gender:{ 
            type:String,
          },
          IsRider:Boolean,

})
module.exports =mongoose.model("User",UserSchema);
import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        trim : true, 
        unique : true
    },
    email : {
        type : String,
        required : true,
        trim : true, 
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

// Hash password before saving user in db

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

UserSchema.method.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model("User", UserSchema);

export default User;
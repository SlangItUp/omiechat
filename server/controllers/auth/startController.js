import User from "../../models/userModel.js";
import generateAndSaveToken from "../../security/generateAndSaveToken.js";

export default async function startController(req,res){
    const {username, gender, age} = req.body;
    if(!username || !gender || !age){
        return res.status(500).json({error:"Internal Server Error"})
    }
    if(username.length < 4 || username.includes(' ')){
        return res.status(500).json({'error': "Username length Error"})
    }
    if(gender!=="Male" && gender!=="Female"){
        return res.status(500).json({error:"Gender Error"}
        )
    }
    if(age<18 || age>99){
        return res.status(500).json({error: "Age Error"})
    }


    const existsUser = await User.findOne({username})
    if(existsUser){
        return res.status(500).json({error: "Username is already Taken"})
        
    }
    const pfp = `https://avatar.iran.liara.run/public/${gender == "Female" ? "girl" : "boy"}?username=${username}`
    const newUser = new User({username,gender,age, pfp})
    try{
    await newUser.save();
    }
    catch(error){
        console.log("Error at startController", error);
    }

    generateAndSaveToken(newUser._id, res);
    return res.status(200).json(newUser)
}
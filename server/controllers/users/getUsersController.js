import User from "../../models/userModel.js";

export default async function getUsers(req,res){
    const userId = req.userId;

    try{
    const filteredUsers = await User.find({ _id: { $ne: userId } });

    res.status(200).json(filteredUsers);
    }
 catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
}
};
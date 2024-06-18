import jwt from 'jsonwebtoken'

function generateAndSaveToken(id, res){
    const token = jwt.sign({ id }, process.env.JWT_SECRET );
    res.cookie("jwt", token,{
        maxAge: 12*60*60*1000,
        httpOnly: true,
        sameSite: "none",
        secure: "false"
    })

}

export default generateAndSaveToken;
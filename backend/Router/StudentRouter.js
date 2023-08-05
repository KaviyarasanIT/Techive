const express=require("express");
const StudentService = require("../Service/StudentService");
const StudentRouter = express.Router();

StudentRouter.get("/bikes",async function(req,res){
    console.log("Working");
    var bikes=await StudentService.showbikes();
    res.json(bikes);
})

StudentRouter.post('/addbikes',async function(req,res){
    var bikes=await StudentService.addbikes(req.body);
    res.json(bikes);
})

StudentRouter.put('/updatebikes/:id',async function(req,res){
    var {id}=req.params;
    var bikes=await StudentService.updatebikes(id,req.body);
    console.log(bikes);
    res.json(bikes);
})

StudentRouter.delete('/deletebikes/:id',async function(req,res){
    var {id}=req.params;
    var bikes=await StudentService.deletebikes(id);
    res.json(bikes);
})

StudentRouter.get('/bikes/:value',async function(req,res){
    var {value}=req.params;
    console.log(value)
    var bikes=await StudentService.searchbikes(value);
    console.log(bikes);
    res.json(bikes);
})
// PostRouter.post('/createpost', async(req, res) => {
//     const {cap,uid} =req.body
//     if(req.files===null) return res.sendStatus(400)
//     const { image } = req.files
//     if (!image) res.sendStatus(0)

//     var user=await UserService.getUser(uid)
//     image.name=user.userid+user.postReg+'.jpg'
//     await UserModel.findByIdAndUpdate(user._id,{postReg:user.postReg+1})
//     image.mv('D:/HeyPal/backend/public/' + image.name);
//     var p=await PostService.createPost({
//         photo:image.name,
//         caption:cap,
//         postedby:{
//             id:user._id,
//             userid:user.userid,
//             pfp:user.photo
//         }
//     })
//     res.sendStatus(200);
// })

module.exports=StudentRouter;
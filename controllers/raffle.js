const Post = require("../model/Post")
const SignUp = require("../model/SignUp")

const raffleRouter= require("express").Router()

raffleRouter.post("/signup",(req,res)=>{
  console.log(req.body)
 
  
   const {fastname,lastname,useremail,password} = req.body
    const signup = new SignUp({fastname,lastname,useremail,password})
    signup.save()
    res.status(200).json({message:"ok"})
})
raffleRouter.post("/login",(request,response)=>{
console.log("login",request.body)
const {useremail} = request.body
const checkPass = request.body.password
 
SignUp.find({useremail}).then((result)=>{
  console.log(result)
  let trueFalse = result[0] ===undefined
  if(trueFalse==false){
    if(result[0].password==checkPass){
      console.log("login success")
      // let parsonObj = {fastname,lastname,useremail,_id} = result[0]
      response.status(200).json({message:"login success",parson:{
       fastname:result[0].fastname, 
       lastname:result[0].lastname,
       useremail:result[0].useremail,
       
      },id:result[0]._id})
      }
  }

}).catch((err)=>{
  console.log(err)
})


})
raffleRouter.post("/userpost",(req,response)=>{
  const postBody = req.body.post.postbody
console.log(req.body.post.id)
Post.find({id:req.body.post.id}).then((result)=>{
  console.log("res",result)

  // Post.find({id:req.body.post.id}).then((result)=>{
   
  //  const userpost =  new Post({id:req.body.post.id,post:[...result[0].post,req.body.post.postbody]})
  //  userpost.save()
   
  // })
//  console.log(userpost)

if(!result[0]){
  const postData = new Post({id:req.body.post.id,post:[postBody]})
  response.status(200).json({post:[req.body.post.postBody]})
  postData.save()
 
 }

 if(result[0]){
  Post.find({id:req.body.post.id}).then((res)=>{
    oldData =  res[0].post
    Post.findOneAndUpdate({id:req.body.post.id},{$set:{post:[...oldData,postBody]}},{new:true}).then(()=>{
      console.log("data update success")
      Post.find({id:req.body.post.id}).then((res)=>{
        response.status(200).json({post:res[0].post})
      })
    })
  })
}
})



 
})

raffleRouter.post("/profile-post",(req,response)=>{
  console.log(req.body)
  Post.find({id:req.body.id}).then((res)=>{
    console.log(res)
    response.status(200).json({post:res[0].post})
    
  })
  
})
module.exports = raffleRouter



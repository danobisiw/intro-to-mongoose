const express=require("express")
const userRouter=require("./routes/user.routes")
const {dbConnect}=require("./config/dbConnect")


const app=express()


app.get("/",(request, response)=>{
  response.send("Welcome")
})

app.use("/users", userRouter)

async function start(){
  await dbConnect();
}
  //ports
  app.listen(4000, (error) => {
    console.log("Server Running on http://localhost:4000");
  });
start();
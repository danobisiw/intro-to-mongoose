const express=require("express")
const router =require("express").Router

const getUser=(request, response)=>{
    response.status(200).send("Single User Request")
};

const getUsers=(request, response)=>{
    response.status(200).send("All Users Request")
};
const createUser=(request, response)=>{
    response.status(200).send("User Creation")
};
const updateUser=(request,response)=>{
    response.status(200).send("User Updated")
};
const deleteUser=(request, response)=>{
    response.status(200).send("User Deleted")
}

module.exports={getUser,getUsers,createUser,updateUser,deleteUser}
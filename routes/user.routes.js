const express = require("express");
const router = require("express").Router;

const {getUser, getUsers, createUser, updateUser, deleteUser}=require("../controller/user.Controller.js")

const userRouter= router()

userRouter.route("/").post(createUser).post(getUsers)
userRouter
  .route("/:postId")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);


module.exports=userRouter

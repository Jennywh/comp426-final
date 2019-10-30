import express from "express";  
  
export const router = express.Router();  
export const prefix = '/helloworld';  
  
router.get('/', function (req, res) {  
  res.send({message: "Hello from example!"})  
});
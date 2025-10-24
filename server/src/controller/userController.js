const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
     const { username, password, email } = req.body;
    const existinguser = await Users.findOne({ username });

    if (existinguser) {
      return res.status(400).json({ message: "username exist already" });
    }
    const existingemail = await Users.findOne({ email });
    if (existingemail) {
      return res.status(400).json({ message: "email used already" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({ username, password:hashedPassword, email });
      res.status(201).json({
      message: "User registered successfully",
      user: { username: newUser.username, role: newUser.role },
    });
  } catch(error) {
     console.error('Error during registration:', error.message)
     res.status(500).json({ message: 'Server error' })
  }
}

const loginUser = async (req,res)=>{
    try{
        const { username, password } = req.body;
        const user = await Users.findOne({ username });
    if (!user) return res.status(401).json({ message: 'Invalid username or password' });

     const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }   
    
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    })
}
      
 catch(error){
   console.error('Error during login :', error.message)
     res.status(500).json({ message: 'Server error' })
 }
}
module.exports = {registerUser,loginUser}

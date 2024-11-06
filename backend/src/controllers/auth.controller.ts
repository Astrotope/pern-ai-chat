import { Request, Response } from 'express'
import prisma from '../db/prisma.js';
import bcrypt from 'bcryptjs';


export const signup = async (req:Request, res:Response) => {
    try {
        const {fullName, username, password, connfirmPasswond, gender} = req.body;

        if (!fullName || !username || !password || !connfirmPasswond || !gender) {
            return res.status(400).json({message: "Please fill in all fields"});
        }

        if (password !== connfirmPasswond) {
            return res.status(400).json({message: "Passwords do not match"});
        }

        const user = await prisma.user.findUnique({ where: { username } });

        if (user) {
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //https://avatar.iran.liara.run/
        generateToken(newUser.id, res)

        const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}'
        const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username} '

        const newUser = await prisma.user.create({
            data: {
                fullName:fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
            }
        })

        if (newUser) {
            // generate token in a sec
            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
            })
        } else {
            return res.status(400).json({message: "Invalid user data"});
        }

    } catch (error:any) {
        console.log("Error in signup controller", error.message);
        return res.status(500).json({message: "Internal server error"});
    }
};

export const login = async (req:Request, res:Response) => {}
export const logout = async (req:Request, res:Response) => {} 

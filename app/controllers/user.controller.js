import { User } from "../models/User.models.js";

export const getSpecificUser = async (req, res) => { 
    try {
        const { id: userId } = req.params;
        const user = await User.findOneById(userId);
        if (!user) {
            throw new Error(`User not found in this collection`);
        }
        res.status(200).send({ data: user });
    }
    catch (err) { }
}
export const getAllUsers = async (req, res) => { 
    try {
        const users = await User.find();
        res.status(200).send({ data: users });
    } catch (err) { };
}
export const addUser =async (req, res) => { 
    try {
        const userBodyToSave = req.body;
        console.log(userBodyToSave);
        const newUser = new User(userBodyToSave);
        const savedUser = await newUser.save();
        res.status(200).send(savedUser)
    } catch (error) {
        throw new Error("Error saving user: " + error);
    }
}
export const updateAnyUserField = async(req, res) => { 
    try {
        const {id: userId} = req.params;
        const userFieldToUpdate = req.body;
        const user = await User.findByIdAndUpdate({ _id: userId }, { ...userFieldToUpdate })
        res.status(200).send({ data: user });
    }catch(error) {}
}
export const deleteUserPermanent =async (req, res) => { 
    const { id: userId } = req.params;
    const user = await User.findByIdAndDelete({ _id: userId }, { new: true })
    res.status(200).send({ data: user });
}

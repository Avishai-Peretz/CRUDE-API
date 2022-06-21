import express from 'express'; 
import { getAllUsers, deleteUserPermanent, addUser,getSpecificUser,updateAnyUserField } from '../controllers/user.controller.js'; 

const userRouter = express()

userRouter.get('/getSpecificUser/:id', getSpecificUser)
userRouter.get('/getAllUsers', getAllUsers);
userRouter.put('/updateAnyUserField/:id', updateAnyUserField);
userRouter.delete('/deleteUserPermanent/:id', deleteUserPermanent);
userRouter.post('/addUser', addUser);



export {userRouter}

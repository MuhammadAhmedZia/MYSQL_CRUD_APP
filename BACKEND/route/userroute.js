import express from 'express';
import { handleDeleteUser, handleToCreateUser, handleToGetAllUsers, handleUpdateUser }  from '../controller/usercontroller.js';

const router = express.Router();


router.post('/',handleToCreateUser);
router.get('/',handleToGetAllUsers);
router.delete('/:id',handleDeleteUser);
router.put('/:id',handleUpdateUser);


export default router

import bcrypt from 'bcryptjs'
import { getAllUsers, UpdateUser, deleteUser, createUser, findByEmail } from '../model/usermodel.js'


export const handleToCreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: "Email is already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await createUser( name, email, hashedPassword );
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

export const handleToGetAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

export const handleDeleteUser = async (req, res) => {
    try {
        const { id }= req.params;
        await deleteUser(id);

        res.status(200).json({ message: 'User deleted' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

export const handleUpdateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, email, password } = req.body

        await UpdateUser(id, name, email, password);

        res.status(200).json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}



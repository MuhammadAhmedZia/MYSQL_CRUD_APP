import express from 'express';
import cors from 'cors'
import userRoute from './route/userroute.js'
// import bodyparser  from 'body-parser';
const app = express();
const PORT = 3000;

//middlewares
app.use(cors());
// app.use(bodyparser());
app.use(express.json())
app.use('/users', userRoute)

// app.get('/',(req, res) => {
//     res.send("welcome to hompage")
// })

app.listen(PORT, () =>{
    console.log("server start:", `http://localhost:${PORT}`);
})

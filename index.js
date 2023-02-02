import express from 'express';
import mongoose from 'mongoose';

const DB_URL = 'mongodb+srv://sanich123:17011987@backend-base.0mm68j9.mongodb.net/?retryWrites=true&w=majority';

const PORT = 3000;

const app = express();
app.use(express.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Сервер работает tot ')
});
async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`The server is running on the ${PORT} port`)
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();


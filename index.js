import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import {router} from './router.js';
mongoose.set('strictQuery', true);

const DB_URL = 'mongodb+srv://sanich123:17011987@backend-base.0mm68j9.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api', router);
app.post('/', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body;
        const post = await Post.create({ author, title, content, picture });
        res.json(post);
    } catch (e) {
        res.status(500).json(e);
    }

});

app.get('/', async (req, res) => {
    res.json({user: 'sanich123'})
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


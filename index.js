/* eslint-disable strict */
import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './router.js';
import { DB_URL, PORT } from './utils/const.js';

mongoose.set('strictQuery', true);

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

app.get('/', async (_req, res) => {
  res.json({user: 'sanich123'});
});
async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`The server is running on the ${ PORT } port`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();


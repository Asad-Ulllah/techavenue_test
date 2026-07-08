// run `node index.js` in the terminal
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/books.routes.js';
const PORT = process.env.PORT || 3000;

const app = express();

console.log(`Hello Node.js v${process.versions.node}!`);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

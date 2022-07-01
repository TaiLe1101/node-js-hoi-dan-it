import express from 'express';
import dotenv from 'dotenv';
import conFigViewEngine from './configs/viewEngine.js';
const app = express();
dotenv.config();

const port = process.env.PORT || 8080;

conFigViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

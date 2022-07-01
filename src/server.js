const express = require('express');
const dotEnv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(
    'Hello mấy bạn mình là Tài Lê hôm nay mình học nodeJS bên ông Hỏi Dân IT :>'
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

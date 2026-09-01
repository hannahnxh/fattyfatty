const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/tracker.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Weight tracker running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server port ${PORT}`));

app.get('/', (req, res) => {
	res.status(200).send(`
	  Callcenter API is built by NTT Networks</br>
    Port: ${PORT}</br>`);
});

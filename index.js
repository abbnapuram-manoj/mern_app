const express = require('express');
const app = express();
const PORT = 5000; // using 5000 so it doesn't conflict with sample_mern_app on 3000

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

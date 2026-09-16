let epress= require('express');
let hrroutes = require('./routes/hr_routes');
let app= epress();

app.use('/api/hr', hrroutes);
//open browser locahost:3000/api/hr/employees

// thsi are sample tests only dont include this in this code
//localhost:3000
// app.get('/', (req, res) => {
//     res.send('home page called');
// });
// //localhost:3000/aboutus
// app.get('/aboutus', (req, res) => {
//     res.send('about page called');
// });

// app.post('/addStudent', (req, res) => {
//     res.send('add student called');
// });


//run server in port 3000
app.listen(3000, () => {
    console.log('server running on port 3000')
});


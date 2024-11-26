const express = require("express")
const path = require('path')

const app = express();
const PORT = process.env.PORT || 4100;

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// To handle form data
app.use(express.urlencoded({ limit: '100mb', extended: true}));
app.use(express.json({ limit: '100mb' }));

app.use('/', require('./routes/root'));

//middleware for cookies
//app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');
const app = express();
const indexRoutes=require('./application/routes/index.route');
const userRoutes=require('./application/routes/user.route');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
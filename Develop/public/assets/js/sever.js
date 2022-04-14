const express = require('express');
const path =require('path');
const fs = require('fs');



const viewRoutes = require('./routing/view-routes');
const apiRoutes = require('./routing/apiy-routes');
const { use } = require('./routing/view-routes');
const PORT = process.env.PORT||3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use('/app', apiRoutes)
app.use('/', viewRoutes)

app.listen(PORT, () =>
console.log('App listening at http://localhost:${PORT}'));
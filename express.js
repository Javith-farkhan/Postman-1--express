const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const traineesRoutes = require('./routes/traineeRoutes');
app.use('/api/v1/trainees', traineesRoutes);

app.use("/*", (req, res) => res.send("No Route Match Found!"));

app.listen(4000, () => console.log("Server is listening on 4000"));
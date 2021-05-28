const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.get('/create-room', async (req, res) => {
    axios
        .post(`https://www.pokernow.club/new-integration-game?token=${process.env.INTEGRATION_TOKEN}`)
        .then(r => {
            if (r.data) {
                res.send({ 'gameID': r.data.gameID });
            } else {
                res.status(500).send({ 'error': 'something went wrong' });
            }
        })
        .catch(error => {
            res.send({ 'error': error });
        })
});

app.listen(8001, () => console.log('Server running on port 8001!'));


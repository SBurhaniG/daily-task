import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use( cors())
app.use( express.json());

app.get('/api/stats', (req, res)=> {
    const user = [
        { id: 1, label: "Total Users", value: "2,450" },
        { id: 2, label: "Active Sessions", value: "512" },
        { id: 3, label: "Server Status", value: "Healthy" }
    ];

    res.send(user);
})

app.listen(PORT, ()=> { console.log('server is connected successfully :)')});
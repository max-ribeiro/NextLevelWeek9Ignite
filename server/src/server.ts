import express from 'express';

const app = express();

//Routes
app.get('/', (request, response) => {
    return response.json([
        {'id': 1, 'name': 'Algo'},
        {'id': 1, 'name': 'Algo'},
        {'id': 1, 'name': 'Algo'}
    ]);
});

app.listen(3333);
import express, { Request, Response } from 'express'

const app = express();

app.get('/ads', (request: Request, response: Response)=>{
    return response.json([
        { id: 1, message: 'Anuncio 1' },
        { id: 2, message: 'Anuncio 2' },
        { id: 3, message: 'Anuncio 3' },
        { id: 4, message: 'Anuncio 4' }
    ])
})

app.listen(3333)
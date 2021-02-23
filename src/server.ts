import express, { request, response } from 'express'

const app = express();

app.get("/", (request, response) => {
    return response.status(200).json({message: "NLW-04 - NodeJs Server"})
})

app.get("/users", (request, response) => {
    return response.json({message: "Imagine que tem uma lista de usuários aqui!"})
})

app.post("/users", (request, response) => {
    return response.json({message: "Está rota é pra criar um usuário"})
})



app.listen(3333, () => console.log("Server is running on http://localhost:3333/"));


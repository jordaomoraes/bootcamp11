 import express from 'express';

 const app = express();

 app.get('/', (resquest, response)=>{

    return response.json({Message:  "Servidor ON!"})

 })

 app.listen(3333,()=>{

  console.log('💥Servidor Rodando na porta 3333!!  ')

 }) 
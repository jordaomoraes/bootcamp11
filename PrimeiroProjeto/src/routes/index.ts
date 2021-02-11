import {Router} from 'express'

const  routes = Router();


routes.get('/', (resquest, response)=>{
  return response.json({Message:  "Servidor ON!"});
})


export default routes;

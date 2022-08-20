const express = require("express")

const port = 3000;

const app = express();

const router = express.Router()

router.get("/", (request, response)=>{
  response.json({
    gretting: "hola"
  })
})

router.get("/otra-ruta", (request, response)=>{
  response.json({
    gretting: "hola x2"
  })
})

app.use("/", router)

app.listen(port, (error) => {

  if (error) 
    console.log("Ha habido un error mi negro :'(")
  else 
    console.log(`The server is running on ${port} port`)

})
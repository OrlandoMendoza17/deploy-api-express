const express = require("express")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

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

router.get("/otra-ruta/mas-larga", (request, response)=>{
  response.json({
    gretting: "hola x3"
  })
})

app.use("/", router)

app.listen(port, (error) => {

  if (error) 
    console.log("Ha habido un error mi negro :'(")
  else 
    console.log(`The server is running on ${port} port`)

})
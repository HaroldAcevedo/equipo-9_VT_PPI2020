const {Router} = require("express")
const {pool} = require("./../db/mysql_pool")
const router = Router()

router.get("/COMENTARIOS",(req,res)  => {
  try{
pool.query("SELECT * FROM COMENTARIOS", (errors,results,fields) => {
  if(errors){
     res.status(502).json("Se presento un error ejecutando la consulta." )
  }else{
  res.status(200).json(results)
  }
})
  }catch(error){
    console.log(error)
    res.status(500).json({mensaje : "se presento un error en el servidor."})
  }
})

router.get("/COMENTARIOS/:id",(req,res)  => {})

router.put("/COMENTARIOS/:id",(req,res)  => {})

router.post("/COMENTARIOS",(req,res)  => {})

router.delete("/COMENTARIOS/:id",(req,res)  => {})

module.exports = router 



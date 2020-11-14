const {Router} = require("express")
const {pool} = require("./../db/mysql_pool")
const router = Router()

router.get("/USUARIOS", (req, res) => {
  connection.query('SELECT * FROM actores', (error, rows, fields) => {
    if (!error) {
      res.json(rows)
    } else {
      res.json({ error: "Error ejecutando la consulta" })
    }
  })
})

router.post("/USUARIOS", (req, res) => {

})

router.get("/USUARIOS/:ID", (req, res) => {

})

router.put("/USUARIOS/:ID", (req, res) => {

})

router.delete("/USUARIOS/:ID", (req, res) => {

})

module.exports = router
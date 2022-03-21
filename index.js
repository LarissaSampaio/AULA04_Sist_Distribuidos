console.log("...SERVIDOR...");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id
    res.send('Lista de usuário:' +id)
  })

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})

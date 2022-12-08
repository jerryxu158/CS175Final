const express = require('express'),
cors = require('cors')
dbOperations = require('./dbFiles/dbOp')
const API_PORT = 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.post('/api', async(req,res) => {
    console.log('Called')
    const result = await dbOperations.getCards(req.body.cardName, req.body.setCode, req.body.setNumber)
    res.send(result.recordset)
})
app.post('/quit', function(req,res){
    console.log('Bye')
    res.send({result: 'bye!'})
})



app.listen(API_PORT, ()=> console.log(`Listening on port ${API_PORT}`))
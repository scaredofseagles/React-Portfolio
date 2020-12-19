const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.json())
app.use(express.static(buildPath))

app.post('/send', (res, req) =>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:', PORT)
})
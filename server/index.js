require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030

const transporter = require('./config')

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.json())
app.use(express.static(buildPath))

app.post('/send', (req, res) =>{
    console.log('req.body received: ', req.body)
    try {
        let mailOptions = {
            from: req.body.email,
            to: process.env.USER_EMAIL,
            replyTo: req.body.email,
            subject: '👀 Portfolio: You received a message!',
            html: `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
            `
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                res.status(500).send({success: false, message: 'Something went wrong. Try again later'})
            } else {
                res.send({success: true, message: 'Thanks for contacting us. We will get back to you shortly'})
            }
        });
    } catch (error){
        console.log('error in the catch', error)
        res.status(500).send({success: false, message: 'Something went wrong. Try again later'})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
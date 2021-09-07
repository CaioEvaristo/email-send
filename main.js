const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const port  = 3000

const user = process.env.USER
const pass = process.env.PASS 

app.get('/', (req,res)=> {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{user, pass}    
    })
    
    transporter.sendMail({
        from: user,
        to: '',
        replyTo: user,
        subject: 'Hello World',
        text: 'Hello World'
    }).then(info=>{
        res.send(info)
    }).catch(error=>{
        res.send(error)
    })
})

app.listen(port, ()=>{
    console.log(`listen on port: ${port}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers={
    '21 savage':{
        age:29,
        birthName : 'Sheyaa Bin Abraham-Joseph',
        birthLoaction: 'London, England'
    },
    'chance the rapper':{
        age:29,
        birthName : 'Chancelor Bennett',
        birthLoaction: 'Chicago, Illinois'
    },

    "dylan":{
        age:'Dylan',
        birthName : 'Dylan Howard',
        birthLoaction: 'Dylan'
    }


}



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName',(req,res)=>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers["dylan"])
    }
    
} )


app.listen(process.env.PORT ||PORT, ()=>{
    console.log(`The server is running on port ${PORT} you better go catch it!`)
})
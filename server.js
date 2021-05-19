const cors=require('cors')
const express=require('express')
const app=express()
const axios=require('axios')
// casca que dentro tem um fetch para o backend

app.use(cors())

app.get('/',async (request,response)=>{
    const {data}=await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    return response.json(data)
})

app.listen(4567)

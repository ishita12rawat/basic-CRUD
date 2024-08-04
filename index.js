const express=require('express')
const  router  = require('./router/blogrout')

// const { router } = require('./router/blogrout')
const app=express()
const PORT =3070
app.use(express.json())
app.use('/user',router)
// app.get('/user',router)

app.listen(PORT,()=>{
    console.log(`sussecful${PORT}`)
})
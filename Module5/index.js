const express = require('express')
const app = require('./app')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const myAppRouter = require('./routes/myAppRoutes')

const userRouter = require('./routes/userRoutes')



//const app2 = express()
const cors = require('cors')

const port = 3000
//const port2 = 3001
app.use(express.json())
app.use(cors())
app.use('/Test', myAppRouter)


app.use('/users', userRouter)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})  

export default app
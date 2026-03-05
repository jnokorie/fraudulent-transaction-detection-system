import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import router from './routes/routes'

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000
const URL = process.env.API_URL

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/transactions', router)


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})  

export default app
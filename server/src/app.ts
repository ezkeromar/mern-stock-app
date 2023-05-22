import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
import routes from './routes'

const port = process.env.PORT || 1337
const origin = process.env.ORIGIN || "*"

const app = express()

app.use(cors({
    origin: origin
}))

app.use(express.json())

app.listen(port, async () => {
    routes(app)

    console.log("app listen on port "+port)
})
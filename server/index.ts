import { NextFunction, Response, Request } from "express"
import express from "express"
import {config} from "dotenv"
config()
import next from "next"
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
import PhotoRoute from "./api/photo.api"
app.prepare().then(() => {
    const server = express()
    server.use(express.urlencoded({ extended: true }))
    server.use(express.json())
    server.use("/api/photo", PhotoRoute)
    server.all("*", (req : Request, res: Response) => {
        return handle(req, res)
    })
        server.use((_req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
        res.header(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, Authorization"
        )
        res.header("Access-Control-Allow-Credentials", "true")
        next()
    })
    ;(async () => server.listen(3000, () => console.log("Ready on http://localhost:3000")))()
})
import { Express, Request, Response } from "express"

export default function routes(app:Express) {
    app.get("/ezker", (req:Request, res:Response) => res.send("Omar"))
}
import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import { authenticate } from "./middleware/auth.middleware"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.get("/", (req, res) => {
    res.send("Running")
})
app.get("/test-middleware", authenticate, (req, res) => {
    res.send("Kamu berhasil mengakses endpoint ini dengan middleware!")
})

export default app
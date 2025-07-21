import express, { json, Router } from 'express'
import { errorHandler } from './app/express/v1/shared/handler/ErrorHandler'
import { register as authRegister } from './app/express/v1/auth/routes/RouteAuthLogIn'
import { register as taskRegister } from './app/express/v1/task/routes/task.route'
import { config } from './context/shared/infrastructure/config'
import { auth } from './app/express/v1/shared/middleware/AuthMiddleware'

const app = express()
app.use(json())
app.use(express.urlencoded({ extended: true }))

const router = Router()

authRegister(router)
router.use(auth)
taskRegister(router)

app.use(router)
app.use(errorHandler)

app.listen(config.express.port, () => {
    console.log(`Server is running on port ${config.express.port}`)
})

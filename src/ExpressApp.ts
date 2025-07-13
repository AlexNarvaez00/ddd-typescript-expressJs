import express, { json, Router } from 'express'
import { errorHandler } from './app/routes/shared/ErrorHandler'
import { auth } from './app/routes/v1/auth/AuthMiddleware'
import { register as authRegister } from './app/routes/v1/auth/RouteAuthLogIn'
import { register as taskRegister } from './app/routes/v1/task/RouteTask'
import { config } from './context/shared/infrastructure/config'

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

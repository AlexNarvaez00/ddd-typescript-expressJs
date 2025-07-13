import express, { json } from 'express'
import { config } from './context/shared/infrastructure/config'
import { routeIndex } from './app/routes/index/RouteIndex'
import { routeTask } from './app/routes/task/RouteTask'
import { routeAuth } from './app/routes/auth/RouteLogin'
import { errorHandler } from './app/routes/error/ErrorHandler'

const app = express()
app.use(json())
app.use(express.urlencoded({ extended: true }))
app.use(routeAuth)
app.use(routeIndex)
app.use(routeTask)
app.use(errorHandler)

app.listen(config.express.port, () => {
    console.log(`Server is running on port ${config.express.port}`)
})

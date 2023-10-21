// eslint-disable-next-line import/no-unresolved, import/extensions
import './helpers/dotenv'

// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'

// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan'

// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors'

// eslint-disable-next-line import/no-extraneous-dependencies
import helmet from 'helmet'

import logger from './helpers/logger'

import router from './routes'

// eslint-disable-next-line import/named
import { notFound, errorHandler } from './helpers/errors'

const app = express()

app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.CORS_ORIGIN }))
const port = parseInt(process.env.PORT, 10) || 3000
app.use(helmet())
app.use(router)
app.use(notFound)
app.use(errorHandler)
app.listen(port, () =>
  logger.log('Application started at http://locathost:$(process.env.PORT'),
)

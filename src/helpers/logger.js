// eslint-disable-next-line import/no-extraneous-dependencies
import pino from 'pino'

const logger = pino({ prettyPrint: { colorize: true } })

export default logger

import createError from 'http-errors'

export const errorToNext = (err, next) => {
    const { status, message } = err

    const error = {
        status: status || 500,
        message: message || 'Internal Server Error'
    }

    return next(createError(error))
}
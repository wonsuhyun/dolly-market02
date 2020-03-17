import createError from 'http-errors'

export const errorWrapper = (fn) => {
    return (req, res, next) => fn(req, res, next).catch((error) => {
        const { status, message } = error
        next(createError(status, message) || createError(500))
    })
}

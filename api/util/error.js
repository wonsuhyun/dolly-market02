import createError from 'http-errors'

// Todo: 언젠가 공통화해서 리팩토링하기
export const errorWrapper = (fn) => {
    return (req, res, next) => fn(req, res, next).catch((err) => {
        errorToNext(err, next)
    })
}

export const errorToNext = (err, next) => {
    const { status, message } = err
    return next(createError(status, message) || createError(500, 'Internal Server Error'))
}
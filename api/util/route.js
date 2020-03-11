export const asyncWrapper = (fn) => {
    return (req, res, next) => fn(req, res, next).catch((error) => {
        const { status, message } = error
        next(createError(status, message) || createError(500))
    })
}
// Todo: CONSTANT 하나 만들어 독립시키기
export const methods = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    PATCH: 'patch',
    PUT: 'put'
}
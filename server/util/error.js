import createError from "http-errors"

export const errorToNext = (error, next) => {
  const { status = 500, message = "Internal Server Error" } = error
  return next(createError(status, message))
}

import jwt from "jsonwebtoken"
import crypto from "crypto"

export const issueToken = (user) => {
  const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
  return token
}

export const criptPassword = (password) => {
  const inputPassword = password
  const salt = process.env.PASSWORD_SECRET
  const hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex")

  return hashPassword
}

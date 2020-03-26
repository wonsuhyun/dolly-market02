
import crypto from 'crypto'

export const criptPassword = (password) => {

    const inputPassword = password
    const salt = process.env.PASSWORD_SECRET
    const hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex")

    return hashPassword
}
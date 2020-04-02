import jwt from 'jsonwebtoken'

export const issueToken = (user) => {
    const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
    return token
}
const userQuery = {
    getAuth(email, password) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.email,
                    A.nickname
                FROM
                    user A
                WHERE A.email = '${email}'
                AND A.pass_word='${password}'`
    },
    getUserByEmail(email) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.email,
                    A.nickname
                FROM
                    user A
                WHERE A.email = '${email}'`
    }
}

export default userQuery 
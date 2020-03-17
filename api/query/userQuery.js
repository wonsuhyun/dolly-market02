import { v4 as uuidv4 } from 'uuid';

const userQuery = {
    getAuth(email, password) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.email,
                    A.nickname,
                    A.img_rid
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
                    A.nickname,
                    A.img_rid
                FROM
                    user A
                WHERE A.email = '${email}'`
    },
    saveUser({ email, nickname, password, imgId }) {
        return `
        INSERT
            INTO
                user (pid,
                create_date,
                modify_date,
                email,
                nickname,
                pass_word,
                img_rid)
            VALUES('${ uuidv4()}',
            NOW(),
            NOW(),
            '${ email }',
            '${ nickname }',
            '${ password }',
            '${ imgId || null }')`
    }
}

export default userQuery 
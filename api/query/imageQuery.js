const imageQuery = {
    getImagesByItemId(itemId) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.file_name,
                    A.file_url,
                    A.size,
                    A.master_flag
                FROM
                    image A
                WHERE A.item_rid = '${itemId}'`
    }
}

export default imageQuery 
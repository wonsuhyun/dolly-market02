const imageQuery = {
  getByItemId(itemId) {
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
  },
  getById(imageId) {
    return `SELECT
            A.pid,
            A.create_date,
            A.file_name,
            A.file_url,
            A.size,
            A.master_flag
        FROM
            image A
        WHERE A.pid = '${imageId}'`
  },
}

export default imageQuery

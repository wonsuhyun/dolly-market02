const tagQuery = {
  getByItemId(itemId) {
    return `SELECT
                    A.pid,
                    A.create_date,
                    A.name
                FROM
                    tag A
                INNER JOIN item_tag_rel B ON
                    A.pid = B.tag_rid
                WHERE
                    B.item_rid = '${itemId}'`
  },
}

export default tagQuery

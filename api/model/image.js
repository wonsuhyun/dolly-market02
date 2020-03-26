export default class Image {
    constructor(image) {
        this.pid = image.pid,
        this.create_date = image.create_date,
        this.file_name = image.file_name,
        this.file_url = image.file_url,
        this.size = image.size || 0,
        this.master_flag = image.master_flag || 0
    }
}
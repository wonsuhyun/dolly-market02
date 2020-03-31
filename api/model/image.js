export default class Image {
    constructor(image) {
        this.pid = image.pid,
        this.createDate = image.create_date,
        this.fileName = image.file_name,
        this.fileUrl = image.file_url,
        this.size = image.size || 0,
        this.masterFlag = image.master_flag || 0
    }
}
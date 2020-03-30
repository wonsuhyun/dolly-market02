class ControllerBase {
    constructor(RepositoryClass) {
        this.service = new RepositoryClass()
    }
}

export default ControllerBase
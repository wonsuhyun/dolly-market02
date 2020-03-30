class ControllerBase {
    constructor(RepositoryClass) {
        this.repository = new RepositoryClass()
    }
}

export default ControllerBase
class ControllerBase {
    constructor(RepositoryClass) {
        this.repository = new RepositoryClass()
    }

    ok(res, data) {
        res.json(data)
    }

    created(res, data) {
        res.status(201).json(data)
    }

    noContent(res) {
        res.status(204)
    }
}

export default ControllerBase
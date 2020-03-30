class ControllerBase {
    constructor(ServiceClass) {
        this.service = new ServiceClass()
    }
}

export default ControllerBase
export default class User {
  constructor(user) {
    ;(this.pid = user.pid),
      (this.createDate = user.create_date),
      (this.modifyDate = user.modify_date),
      (this.email = user.email),
      (this.nickname = user.nickname),
      (this.image = user.image || null)
  }
}

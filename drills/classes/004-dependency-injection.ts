class Database {
  save(data: string) {
    console.log(`Saved: ${data}`);
  }
}

class UserService {
  constructor(private database: Database) {}

  createUser(name: string) {
    this.database.save(name);
  }
}

const db = new Database();

const userService = new UserService(db);
userService.createUser("Mousa");

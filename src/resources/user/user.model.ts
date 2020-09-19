export default class User {
    username: String
    firstName: String
    lastName: String
    email: String
    password: String

    static users: User[] = [];

    constructor(username: String,firstName: String,lastName: String,email: String,password: String) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    save() {
        User.users.push(this)
    }

    static userIdExists(username: String) {
        for (const user of User.users) {
            if (user.username === username) {
                return true;
            }
        }
        return false;
    }
    
    static deleteUser(username: String) {
        User.users = User.users.filter(user => user.username !== username)
    }

    static getUser(id: String) {
        for (const user of User.users) {
            if (user.username === id) {
                return user;
            }
        }
    }
}
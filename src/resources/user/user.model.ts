export default class User {
    userID: String
    firstName: String
    lastName: String
    email: String
    password: String

    static users: User[] = [];

    constructor(userID: String, firstName: String, lastName: String, email: String, password: String) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    save() {
        User.users.push(this)
    }

    static userIdExists(userID: String) {
        for (const user of User.users) {
            if (user.userID === userID) {
                return true;
            }
        }
        return false;
    }
    
    static deleteUser(userID: String) {
        User.users = User.users.filter(user => user.userID !== userID)
    }

    static getUser(id: String) {
        for (const user of User.users) {
            if (user.userID === id) {
                return user;
            }
        }
    }

    update(props: any) {
        for (let prop in this) {
            
            if (prop === 'userID') {
                continue
            }

            if (props.hasOwnProperty(prop)) {
                this[prop] = props[prop]
            }
        }
    }
}
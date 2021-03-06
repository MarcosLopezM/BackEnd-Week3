const User = require('../models/User');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "No Bio");
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    static updateUserUsername(user, newUsername) {
        user.username = newUsername;
    }
}

module.exports = UserService;
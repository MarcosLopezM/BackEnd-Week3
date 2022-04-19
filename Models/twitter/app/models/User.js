class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id,
        this.username = username,
        this.name = name,
        this.bio = bio,
        // Values assigned when object is instantiated
        this.dateCreated = new Date(),
        this.lastUpdated = new Date()
    }
}

// Exporting class using
module.exports = User;
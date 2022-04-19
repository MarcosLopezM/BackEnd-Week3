const User = require('./../../app/models/user');

describe("Unit test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "MarcosLopezM", "Marcos", "Bio", "dateCreated", "lastUpdated")
        
        // Validating code
        expect(user.id).toBe(1)
        expect(user.username).toBe("MarcosLopezM")
        expect(user.name).toBe("Marcos")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})
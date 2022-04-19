const User = require('./../../app/models/user');

describe("Unit test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "MarcosLopezM", "Marcos", "Bio")
        
        // Validating code
        expect(user.id).toBe(1)
        expect(user.username).toBe("MarcosLopezM")
        expect(user.name).toBe("Marcos")
        expect(user.bio).toBe("Bio")
        /*
            Verifies if the values are not Undefined,
            even though we have not assigned them
        */
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
})
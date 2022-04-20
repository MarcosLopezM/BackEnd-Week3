const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "MarcosLopezM", "Marcos");

        expect(user.username).toBe("MarcosLopezM")
        expect(user.name).toBe("Marcos")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})
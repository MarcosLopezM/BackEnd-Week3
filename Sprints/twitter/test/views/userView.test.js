const UserView = require('../../app/views/userView.js');

describe("Tests for UserView", () => {
    test("Return an error object when trying to create a new user with a null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload)

        // Verifies if the object key 'error' matches a certain string
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    });

    test("Return an error object when trying to create a new user with payload with missing properties", () => {
        const payload = {username: "username"};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    });

    test("Create a user by a given payload", () => {
        const payload = {username: "username", name: "name", id: 1};
        const result = UserView.createUser(payload);

        expect(result.username).toBe("username");
        expect(result.name).toBe("name");
        expect(result.id).toBe(1);
    });
})
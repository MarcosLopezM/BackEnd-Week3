const spiderMan = require('./../app/spiderman');

describe("Unit Tests for Spider-Man Class", () => {
    test('1) Create a Spider-Man Object', () => {
        // spiderMan instance
        const tobeySpiderMan = new spiderMan("First Spider-Man", 47, "Tobey Maguire", 3, "Marvel Enterprises");

        // Validating code
        expect(tobeySpiderMan.name).toBe("First Spider-Man")
        expect(tobeySpiderMan.age).toBe(47)
        expect(tobeySpiderMan.actor).toBe("Tobey Maguire")
        expect(tobeySpiderMan.numberOfMovies).toBe(3)
        expect(tobeySpiderMan.studio).toBe("Marvel Enterprises")
    });
})
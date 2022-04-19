const missionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new missionCommander('Carlo');

        // Validar el resultado esperado
        expect(myMissionCommander.name).toBe('Carlo');
    });
})
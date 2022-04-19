class spiderMan {
    constructor(name, age, actor, numberOfMovies, studio) {
        this.name = name,
        this.age = age,
        this.actor = actor,
        this.numberOfMovies = numberOfMovies,
        this.studio = studio
    }

    getInfo() {
        return `Hey, I'm ${this.actor} from ${this.studio}`;
    }
}

module.exports = spiderMan;
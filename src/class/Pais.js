export class Pais {
    #name 
    #flag 
    #status
    #capital = []
    #continent    
    #subRegion

    setName(nombre) {
        this.#name = nombre
    }
    getName() {
        return this.#name
    }

    setFlag(bandera) {
        this.#flag = bandera
    }
    getFlag() {
        return this.#flag
    }

    setStatus(status) {
        this.#status = status
    }
    getStatus() {
        return this.#status
    }

    setCapital(capital) {
        this.#capital = capital
    }
    getCapital() {
        return this.#capital
    }

    setContinent(continent) {
        this.#continent = continent
    }
    getContinent() {
        return this.#continent 
    }

    setRegion(subRegion) {
        this.#subRegion = subRegion
    }
    getRegion() {
        return this.#subRegion
    }
}
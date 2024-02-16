export class ListPaises {
    #countries = []

    addCountries(pais) {
        this.#countries.push(pais)
    }
    getCountries() {
        return this.#countries
    }
}
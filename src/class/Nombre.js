export class Nombre {
    #comun
    #oficial

    setComun(name) {
        this.#comun = name
    }
    getComun(){
        return this.#comun
    }

    setOficial(oficial){
        this.#oficial = oficial
    }
    getOficial() {
        return this.#oficial
    }
}
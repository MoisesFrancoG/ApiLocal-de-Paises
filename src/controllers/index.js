import {listaPaises} from "../controllers/dependecies.js"
import { Pais } from "../class/Pais.js"
import { Banderas } from "../class/Banderas.js"
import{ Nombre } from "../class/Nombre.js"

const btn = document.getElementById("btn-api")
btn.addEventListener("click", ()=> {
    let url = "https://restcountries.com/v3.1/all"
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            data.forEach(element => {
                let nombre = new Nombre()
                let bandera = new Banderas()
                let pais = new Pais()

                nombre.setOficial(element.name.official)
                nombre.setComun(element.name.common)

                bandera.setPng(element.flags.png)
                bandera.setAlt(element.flags.alt)

                pais.setName(nombre)
                pais.setFlag(bandera)
                pais.setStatus(element.status)
                element.capital.forEach(item => {
                    pais.getCapital().push(item)
                })
                pais.setContinent(element.region)
                pais.setRegion(element.subregion)
                listaPaises.addCountries(pais)
            });
        }
    )
})

const btnView = document.getElementById("view")
btnView.addEventListener("click", ()=> {
    const div = document.getElementById("show")

    listaPaises.getCountries().forEach(item => {
        let article = document.createElement("article")

        let img = document.createElement("img")
        let nameOficial = document.createElement("p")
        let nameComun = document.createElement("p")
        let status = document.createElement("p")
        let capital = document.createElement("p")
        let continente = document.createElement("p")
        let subRegion = document.createElement("p")
        

        img.src = item.getFlag().getPng()
        nameOficial.textContent = item.getName().getOficial()
        nameOficial.classList.add("name-oficial")
        nameComun.textContent = "Nombre Común: " + item.getName().getComun()
        status.textContent = "Estatus: " + item.getStatus()
        capital.textContent = "Capital: " + item.getCapital()
        continente.textContent = "Continente en el que se encuentra: " + item.getContinent()
        subRegion.textContent = "SubRegion: " + item.getRegion()


        article.appendChild(img)
        article.appendChild(nameOficial)
        article.appendChild(nameComun)
        article.appendChild(status)
        article.appendChild(capital)
        article.appendChild(continente)
        article.appendChild(subRegion)

        div.appendChild(article)
    })
})
import React from "react";

function Pages({ actualPage, backPage, actualIsHome }) {
    let arrayPages = []

    actualPage= actualPage? actualPage : null // si no tiene valor de "actualPage" es porque esta en home, y su valor es null

    let nextPage = actualIsHome? 1 : actualPage + 1 // si esta en home, la pagina siguiente es /videogames/1

    let conditional= actualIsHome? null: <a href={"/home"} id="back">ANTERIOR</a> // si esta en home pagina anterior, si no lo esta,
    //utilizo esta variable condicional en la linea 18 para cuando este parada sobre /videogames/1 

    for (let i = 1; i < 20; i++) {
        arrayPages.push(i)
    }
    return (
        <div className="pagesContainer"> 
            {backPage? <a href={"/videogames/" + backPage} id="back">ANTERIOR</a> : conditional} 
            {arrayPages.map((page)=> (<a href={"/videogames/" + page} className="pageButton">{page}</a>))}
            <a href={"/videogames/" + nextPage} id="next">SIGUIENTE</a>
        </div>
    )
}

export default Pages
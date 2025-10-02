import Card from "./card";
import { useState, useEffect } from "react"

function MyMain() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [ListaAttori, setListaAttori] = useState([]);

    /* Hook di Effetto */

    useEffect(() => {
        fetchListaAttori(); //Chiamata Api al montaggio del componente
    }, []);

    /***************
        RENDERING
    ****************/ 
    return (
            <main className="container"> 
            {ListaAttori.map(attore => (
                <Card 
                    key={attore.id}
                    attore = {attore}
                />
            ))}
            </main>
    )

    /***************
        FUNZIONI
    ****************/ 

    /* Richiesta API per ottenere la lista di attori */
    function fetchListaAttori() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((risApi) => setListaAttori(risApi.data))  
                 
    }
}

export default MyMain
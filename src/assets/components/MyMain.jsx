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
    return(
        <main> 
            
        </main>
    )

    /***************
        FUNZIONI
    ****************/ 

    /* Richiesta API per ottenere la lista di attori */
    function fetchListaAttori() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
        .then((risApi) => console.log(risApi.data))  
                 
    }
}

export default MyMain
function Card (props) {

    const { attore } = props
    
    return (
            <div className="container-card">
                <h3> {attore.name} </h3>
                <div className="text-center"> {attore.birth_year}  {attore.death_year && ` - ${attore.death_year}`} </div>
                <div className="container-img">
                <figure> <img src={attore.image} alt={attore.name} /></figure>
                </div>

                <ul className="description-card">
                    <li> <span className="text-bold"> NATIONALITY: </span> {attore.known_for} </li>
                    <li> <span className="text-bold"> KNOWN FOR: </span> {attore.nationality}</li>
                    <li> <span className="text-bold"> AWARDS: </span> {attore.awards} </li>
                    <li> <span className="text-bold"> BIOGRAPHY: </span> {attore.biography} </li>
                </ul>
            </div>
    )
}


export default Card
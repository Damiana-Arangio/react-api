function Card (props) {

    const { attore } = props
    
    return (
            <div className="card">
                <h3> {attore.name} </h3>
                <figure> <img src={attore.image} alt={attore.image} /></figure>
                <div> BORN: {attore.birth_year}  {attore.death_year && ` - ${attore.death_year}`} </div>
                <div>NATIONALITY: {attore.nationality}</div>
                <div>KNOWN FOR: {attore.known_for}</div>
                <div>AWARDS: {attore.awards}</div>
                <p> BIOGRAPHY: {attore.biography}</p>
            </div>
    )
}


export default Card
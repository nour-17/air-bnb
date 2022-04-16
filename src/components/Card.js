import react from "react"


export default function Card(props){
    let badegText
    if(props.openSpots === 0) {
        badegText = 'SOLD OUT'
    }else if(props.location ==="Online"){
        badegText = 'Online'
    }





    return(
        <div className="card">
            <img src={`../images/${props.coverImg}`} alt="" className="imagee" />
            {badegText && <p className="stats">{badegText}</p>}
            <div className="rating">
                <img src="../images/star.png" alt=""  className="star"/>
                <p>{props.stats.rating} <span className="faded">({props.stats.reviewCount}).{props.country}</span></p>
            </div>
            <p className="sec">{props.title}</p>
            <p className="third"><strong>From ${props.price}</strong>/ person</p>
        </div>
    )
}
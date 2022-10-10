const Card = ({item}) => {
    const{title, desc, image} = item;
return (
    <div>
        <div className="başlık">
            <h2>POPULAR TOUR PLACES</h2>
        </div>
        <div className="card">
            <div className="city">
                <h2>{title}</h2>
            </div>
            <div className="img">
                <img src={image} alt=""/>
            </div>
            <div className="desc">
                <p>{desc}</p>
            </div>
        </div>

    </div>


)
}
export default Card;
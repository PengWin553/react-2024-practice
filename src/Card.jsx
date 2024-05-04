import profilePicture from './assets/images/cat cartoon.png'
function Card(){
    return(
        <div className="card">
            <img src={profilePicture} alt="profile picture" className="card-image" />
            <h3 className="card-name">Pengwin</h3>
            <p className="card-description">I like coding and music.</p>
        </div>
    )
}

export default Card
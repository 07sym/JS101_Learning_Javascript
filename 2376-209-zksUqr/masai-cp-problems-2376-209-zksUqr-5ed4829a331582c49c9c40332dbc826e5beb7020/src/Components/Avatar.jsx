//enter code here
// Avatar should accept caption and image  as props
// do default export
function Avatar(){
    const avatarStyle={
        borderRedius : "50%"
    }
    return(
        <div>
            <img src="https://wallpapercave.com/wp/wp4633360.jpg" alt="Caption" style={avatarStyle}/>
            <h2>Caption</h2>
        </div>
    )
}
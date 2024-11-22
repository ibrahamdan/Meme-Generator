import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--logo-title">
                <img className="navbar--logo" alt="logo" src={ logo }></img>
                <p className="navbar--title">Meme Generator</p>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}
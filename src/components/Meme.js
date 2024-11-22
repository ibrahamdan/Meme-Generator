import React from "react"

export default function Meme(props) {
    if (!props.formData.meme) {
        return <div className="meme-container"></div>
    }
    return (
        <div className="meme-container">
            <img className="meme" alt="meme" src={props.formData.meme.url} />
            <h2 className="meme--text top">{props.formData.topText}</h2>
            <h2 className="meme--text bottom">{props.formData.bottomText}</h2>
        </div>
    )
}
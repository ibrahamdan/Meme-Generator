import html2canvas from "html2canvas"
import React from "react"

export default function Meme(props) {

    const meme = props.formData.meme

    const downloadMeme = (event) => {
        event.preventDefault()
        const memeDiv = document.querySelector(".meme-container")
        if (memeDiv) {
            html2canvas(memeDiv, {
                useCORS: true,
                scale: 2
            }).then((canvas) => {
                const link = document.createElement("a")
                link.download = "meme.png"
                link.href = canvas.toDataURL("image/png")
                link.click()
                console.log("download request")
            })
        }
    }

    if (!props.formData.meme) {
        return <div className="meme-container"></div>
    }
    return (
        <div>
            <div className="meme-container">
                <img className="meme" alt="meme" src={typeof meme === "string" ? meme : meme?.url } crossOrigin="anonymous" />
                <h2 className="meme--text top">{props.formData.topText}</h2>
                <h2 className="meme--text bottom">{props.formData.bottomText}</h2>
            </div>
            <button onClick={downloadMeme} className="btn download-btn">Download</button>
        </div>
    )
}
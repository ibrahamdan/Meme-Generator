import React from "react";

export default function Form(props) {

    const fileInputRef = React.useRef(null);

    function handleChange(event) {
        const {name, value} = event.target
        props.setFormData(prevForm => (
            {
                ...prevForm,
                [name]: value
            }
        ))
    }

    function handleUploadBtn(event) {
        event.preventDefault()
        fileInputRef.current.click()
    }

    function handleClick(event) {
        event.preventDefault()        
        props.getRandomMeme()
    }

    return (
        <form className="form">
            <span className="section">
                <label className="form--label" htmlFor="top-text">
                    Top Text
                </label>
                <input
                    className="form--input"
                    type="text"
                    placeholder="e.g. Shut up"
                    name="topText"
                    onChange={handleChange}
                    value={props.formData.topText}
                ></input>
            </span>
            <span className="section">
                <label className="form--label" htmlFor="bottom-text">
                    Bottom Text
                </label>
                <input
                    className="form--input"
                    type="text"
                    placeholder="e.g. And take my money"
                    name="bottomText"
                    onChange={handleChange}
                    value={props.formData.bottomText}
                ></input>
            </span>
            <button className="btn generate-btn" onClick={handleClick}>
                Generate Meme
            </button>
            <button className="btn upload-btn" onClick={handleUploadBtn}>
                Upload Meme
            </button>
            <input className="upload-input" type="file" accept="image/*" ref={fileInputRef} onChange={props.getUploadedMeme} />
        </form>
    );
}

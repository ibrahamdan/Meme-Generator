import React from "react";

export default function Form(props) {

    function handleChange(event) {
        const {name, value} = event.target
        props.setFormData(prevForm => (
            {
                ...prevForm,
                [name]: value
            }
        ))
        console.log(props.formData)
    }

    function handleClick(event) {
        event.preventDefault()
        props.getMeme()
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
            <button className="generate-btn" onClick={handleClick}>
                Generate Meme
            </button>
        </form>
    );
}

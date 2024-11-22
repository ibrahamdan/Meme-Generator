import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import Meme from "./components/Meme";
import React from "react";



function App() {

    const [memesArray, setMemesArray] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setMemesArray(data.data.memes))
    }, [])
    
    const [randomMeme, setRandomMeme] = React.useState(null)

    const [formData, setFormData] = React.useState(
        {
            topText: "",
            bottomText: "",
            meme: randomMeme
        }
    )

    const getRandomMeme = () => {
        const newMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
        
        setRandomMeme(newMeme)
        setFormData(prevForm => (
            {
                ...prevForm,
                meme: newMeme
            }
        ))
    }

    

    function logMeme() {
        console.log(randomMeme)
    }

    function dispForm() {
        console.log(formData)
    }

    return (
        <div>
            <Navbar />
            <Form 
                getMeme={getRandomMeme}
                formData={formData}
                setFormData={setFormData}
            />
            <Meme 
                formData={formData}
            />
            <button onClick={logMeme}>LOG</button>
            <button onClick={dispForm}>Display Form</button>
        </div>
    );

    /*const [show, setShow] = React.useState(true)

    return (
        <div className="container">
            <button onClick={() => {setShow(prevShow => !prevShow)}}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )*/
}

export default App;
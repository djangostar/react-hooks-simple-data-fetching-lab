// create your App component here
import React, {useEffect, useState } from "react"

function App() {
    const [randomDogs, setRandomDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setRandomDogs(data.message)
                setIsLoaded(true)
            })
    }, [])
    if (!isLoaded) return <p>Loading...</p>

    return <img src={randomDogs} alt="A Random Dog" />
}

export default App

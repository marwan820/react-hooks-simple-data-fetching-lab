

// create your App component here
import React, {useState, useEffect} from "react";



export default function App(){

    const [dogImage,setDogImage] = useState('')
    const [isLoaded,setisLoaded] = useState(false)


    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDogImage(data.message))
        
         setisLoaded(true)
        },[])

       if (!isLoaded) return <p>Loading ...</p>

        return(
            <div>
            <img  src={dogImage} alt="A Random Dog"></img>
            </div>
        
        )






}
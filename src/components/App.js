

// create your App component here
import React, {useState, useEffect} from "react";
import HandleImage from "./HandleImage";



export default function App(){

    const [dogImage,setDogImage] = useState("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
    const [isLoaded,setisLoaded] = useState(false)



    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDogImage(data.message))

    
        
         setisLoaded(true)
        },[])



       

        return(
            <div>
                <p>{!isLoaded?"Loading...":""}</p>
            <HandleImage dogImage={dogImage}/>
            </div>
        
        )}
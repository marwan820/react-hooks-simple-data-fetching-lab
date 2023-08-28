

// create your App component here
import React, {useState, useEffect} from "react";
import HandleImage from "./HandleImage";




export default function App(){

    const [dogImage,setDogImage] = useState(null)



    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDogImage(data.message))

    
        
        
        },[])

        if(!dogImage) return <p>Loading...</p>




       

        return(
            <div>
    
            <HandleImage dogImage={dogImage}/>
            </div>
         )}
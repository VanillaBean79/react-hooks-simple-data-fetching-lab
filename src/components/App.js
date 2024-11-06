import React, {useEffect, useState} from 'react'

function App(){
    const [dogImage, setDogImage] = useState(null)
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(data => setDogImage(data.message))
            setLoading(false)
    },[])

         return(
            <div>
            {loading  ? 
              <p>Loading...</p>  
            : 
              <img src={dogImage} alt="A Random Dog" />  // Show the dog image when it's loaded
            }
          </div>
    )
}










export default App
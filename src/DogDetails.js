import React from 'react';
import {useParams} from 'react-router-dom';



const DogDetails = (props) => {
    const {name} = useParams();
    
    let dog = props.dogs.filter(dog => dog.name === name)
    
    return (
        <div>
            {dog.map(dog => (
                <div>
                    <h1>Name:{dog.name}</h1>
                    <h3>Age:{dog.age}</h3>
                    <img src={dog.src} alt={dog.name} />
                    {dog.facts.map(f => <p>{f}</p>)}
                </div>
                
            ) )}
            
        </div>
    )
}

export default DogDetails;
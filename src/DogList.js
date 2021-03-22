
const DogList = (props) => {
    return (
        <div>
            {props.dogs.map(dog => (
                <div>
                    <h3>{dog.name}</h3>
                    <img src={process.env.PUBLIC_URL + `${dog.src}`} />
                </div>
            ))}
        </div>
    )
}

export default DogList;
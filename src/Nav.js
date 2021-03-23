
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <ul>
            {props.dogs.map(dog => <li key={dog.name}><Link  to={`/dogs/${dog.name}`} >{dog.name}</Link></li>)}
        </ul>
    )
}

export default Nav;

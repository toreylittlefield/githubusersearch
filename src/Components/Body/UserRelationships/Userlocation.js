
import { GoLocation } from 'react-icons/go'


const Userlocation = (props) => {

    const location = props.searchUser.location === null ? 'N/A' : props.searchUser.location;

    return (
        <p><GoLocation />  {location}</p>
    )

}

export default Userlocation;
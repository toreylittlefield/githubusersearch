import { FiTwitter } from 'react-icons/fi'

const Usertwitter = (props) => {
    const twitter = props.searchUser.twitter_username === null ? 'N/A' : props.searchUser.twitter_username;

    return (
        <p> <FiTwitter /> {twitter}</p>
    )

}

export default Usertwitter;
import { BsGithub } from 'react-icons/bs'

const Userrepo = (props) => {
    const repos = props.searchUser.repos_url === null ? 'location not set' : props.searchUser.repos_url;

    return (
        <p> <BsGithub /> {repos}</p>
    )

}

export default Userrepo;
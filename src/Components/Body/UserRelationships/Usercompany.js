import { ImOffice } from 'react-icons/im'



const Usercompany = (props) => {
    const company = props.searchUser.company === null ? 'N/A' : props.searchUser.company;

    return (
        <p><ImOffice /> {company}</p>
    )

}

export default Usercompany;
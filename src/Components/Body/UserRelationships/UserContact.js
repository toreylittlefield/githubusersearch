import styled from "styled-components";
import Usercompany from "./Usercompany";
import Userlocation from "./Userlocation";
import Userrepo from "./Userrepo";
import Usertwitter from "./Usertwitter";

const ContactDiv = styled.div`

 @media (max-width: 768px) {
 
    width: 100%;
    
    font-size: 9px;

    margin-top: 50px;

 
  }

`


const UserContact = (props) => {

    return (
        <ContactDiv>
            <Userlocation searchUser={props.searchUser} />
            <Userrepo searchUser={props.searchUser} />
            <Usercompany searchUser={props.searchUser} />
            <Usertwitter searchUser={props.searchUser} />
        </ContactDiv>
    )
}

export default UserContact; 
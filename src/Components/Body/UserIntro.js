import styled from "styled-components";
import JoinedDate from "./JoinedDate";
import UserBio from "./UserBio";


const UserIntroDiv = styled.div`

display: flex;
align-items: top;
justify-content: space-between;
width: 100%;
height: 30%;
margin: 20px 0;

 @media (max-width: 768px) {
    justify-content: space-evenly;
    width: 90%;
    margin: 0;
    font-size: 100%;
  }

`
const JoinedDateStyle = styled.div`


align-self: top;
height: 100%;
margin-left: 5%;
 width: 30%;


 @media (max-width: 768px) {
 
    width: 30%;
    margin: 0;
    font-size: 100%;
  }
`

const UserDatails = styled.div`

width: 100%;


`




const UserIntro = (props) => {



    return (
        <UserIntroDiv>

            <UserDatails>
                <h2>{props.searchUser.name === null ? 'N/A' : props.searchUser.name}  </h2>
                <p style={{ fontStyle: 'italic' }}>@{props.searchUser.login}</p>

                <UserBio searchUser={props.searchUser} />

            </UserDatails>
            <JoinedDateStyle>
                <JoinedDate searchUser={props.searchUser} />

            </JoinedDateStyle>


        </UserIntroDiv>
    )
}

export default UserIntro;
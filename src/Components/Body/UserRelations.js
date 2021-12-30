import styled from "styled-components";



const RelationsDiv = styled.div`

width: 30rem;
height: 30%;
margin: 0.5rem 0;
background: ${props => props.theme.body};
color: ${props => props.theme.text};
display: flex;
justify-content: space-evenly;
border-radius: 10px;
text-align: center;
align-items: center;
 @media (max-width: 768px) {
 
    width: 80%;
    
    font-size: 0.8rem;
  }

   @media (min-width: 1044px) {
    // width: 30rem
    width: 90%;
   
    font-size: 1rem;
  }

`


const UserRelations = (props) => {

    return (
        <RelationsDiv>
            <div>
                <p>Repos</p>
                <h2>{props.searchUser.public_repos}</h2>
            </div>
            <div>
                <p>Followers</p>
                <h2>{props.searchUser.followers}</h2>
            </div>
            <div>
                <p>Following</p>
                <h2>{props.searchUser.following}</h2>
            </div>
        </RelationsDiv>
    )
}

export default UserRelations;
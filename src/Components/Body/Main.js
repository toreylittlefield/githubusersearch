import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageIcon from "./ImageIcon";
import UserContact from "./UserRelationships/UserContact";
import UserIntro from "./UserIntro";
import UserRelations from "./UserRelations";


const MainPageDiv = styled.div`
 
background: ${props => props.theme.inputBg};
border-radius: 10px;
color: ${props => props.theme.text};
width: 100%;
height: 75%;
margin: 10px 0;
display: flex;
// justify-content: space-around;

 @media (max-width: 768px) {
    width: 100%;
    height: 80%;
    font-size: 0.7rem;
  }

`

const UserComponents = styled.div`
margin: 0 0 0 1rem;


 @media (min-width: 1044px) {
    width: 50rem;
    height: 100%;
    font-size: 1rem;
  }

`







const Main = (props) => {







    return (
        <MainPageDiv>
            <ImageIcon searchUser={props.searchUser} />
            <UserComponents>

                <UserIntro searchUser={props.searchUser} />
                <UserRelations searchUser={props.searchUser} />
                <UserContact searchUser={props.searchUser} />

            </UserComponents>

        </MainPageDiv>
    )
}


export default Main;
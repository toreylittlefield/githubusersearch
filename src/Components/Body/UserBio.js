import styled from "styled-components";

const Bio = styled.div`
width: 10rem;
margin-bottom: 0 0  1rem 0;
`



const UserBio = (props) => {



    // const myBio = props.searchUser.bio ? <p>{props.searchUser.bio}</p> : 'The user has no bio'

    return (
        <Bio>

            {props.searchUser.bio === null ? 'This user has no bio' : props.searchUser.bio}
        </Bio>
    )

}

export default UserBio;

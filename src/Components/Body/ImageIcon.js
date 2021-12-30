import styled from "styled-components";


const Image = styled.img`
  border-radius: 50%;
   width: 20%;
    height: 40%;
    margin-left: 1rem;
    margin-top: 1rem;

     @media (max-width: 768px) {
    width: 20%;
    height: 20%;
    font-size: 0.8rem;
  }
`

const ImageIcon = (props) => {

    return (
        <Image src={props.searchUser.avatar_url} />
    )
}

export default ImageIcon;
import styled from "styled-components";
import { ReactComponent as SearchSvg } from '../../starter-code/assets/icon-search.svg'
import { useState, useEffect } from "react";
import useDidMountEffect from "./useDidMount";



const Form = styled.form`

  display:flex;
  flex-direction:row;
  height: 5rem;
  border-radius: 5px;

  background: transparent;
  border:1px solid grey;
  width: 100%;
  
`

const Input = styled.input`
 
flex-grow:2;
// background: transparent;
background: ${props => props.theme.inputBg};
border: none;
color: ${props => props.theme.text};

::-webkit-input-placeholder {
    color: ${props => props.theme.text};
  }
  :-ms-input-placeholder {
     color:  ${props => props.theme.text};
  }

font-size: 1.5rem;
width: 80%;
 
    
// & :placeholder{
//       opacity: 1;
//       color: red;
//  }
//  @-webkit-keyframes autofill {
//       to {
//         // color: black;
//         background: transparent;
//       }
//     }
    
// &:-webkit-autofill {
//       -webkit-animation-name: autofill;
//       -webkit-animation-fill-mode: both;
//  }


`

const SearchButton = styled.button`

height: 100%;
border-radius: 5px;
align-self: center;
width: 20%;
background-color: ${props => props.theme.inputBg};
font-size: 1rem;
color: ${props => props.theme.text};


`








const InputComponents = (props) => {
    const [searchItem, setSearchItem] = useState('')

    const myAsyncFunc = async () => {

        try {

            const response = await fetch(`/.netlify/functions/username-get?search=${searchItem}`);

            if (response.ok) {

                const json = await response.json();
                console.log(json)
                props.setsearchUser(json)
                // props.setsearchUser(response)
                props.setLoaded(true);
                props.setFailed(false)

                setSearchItem('');
            } else {
                props.setFailed(true);
                props.setLoaded(true);
                setSearchItem('');

                console.log('response 404')
            }


        } catch (e) {

        }
    };
    useDidMountEffect(() => {


        myAsyncFunc();


    }, [])


    const handleInput = (e) => {
        setSearchItem(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        myAsyncFunc();

    }






    return (
        <Form onSubmit={handleSubmit}>

            <Input placeholder="Search Username" onChange={handleInput} value={searchItem} />
            <SearchButton>Search</SearchButton>

        </Form>
    )
};

export default InputComponents;

















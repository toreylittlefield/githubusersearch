

import { ReactComponent as SunSvg } from '../../starter-code/assets/icon-sun.svg';
import { ReactComponent as MoonSvg } from '../../starter-code/assets/icon-moon.svg'
import styled from 'styled-components';


const ColorChangeBtn = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: fit-content;
background-color: none;




`

const Icon = (props) => {

    const LightWord = () => {

        return (
            <ColorChangeBtn>
                <p>LIGHT</p>
                <SunSvg />
            </ColorChangeBtn>
        )
    };

    const DarkWord = () => {

        return (
            <ColorChangeBtn>
                <p>DARK</p>
                <MoonSvg />
            </ColorChangeBtn>
        )
    };


    const icon = props.theme === 'dark' ? <LightWord /> : <DarkWord />


    return (
        <div>
            {/* <h3>{icon}</h3> */}

            <ColorChangeBtn onClick={props.themeToggler}>{icon}</ColorChangeBtn>

        </div>

    )
}

export default Icon;
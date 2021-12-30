import { HeaderStyle } from "../Styles/component-styles";
import Icon from "./Icon"



const Header = (props) => {



    return (
        <HeaderStyle>

            <h2>devfinder</h2>
            <Icon themeToggler={props.themeToggler} theme={props.theme} />
        </HeaderStyle>
    )
};

export default Header;
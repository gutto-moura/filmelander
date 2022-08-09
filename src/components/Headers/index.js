import filmelander from "../../assets/filmelander.png";
import { HeaderContainer } from "./headerStyle";

function Header(){
    return(
        <HeaderContainer>
        <img src = {filmelander} alt = "Logomarca Filmelandia" />
        </HeaderContainer>
    )
}

export default Header;
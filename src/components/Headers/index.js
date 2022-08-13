import filmelander from "../../assets/filmelander.png";
import { HeaderContainer } from "./headerStyle";

function Header(){
    return(
        <HeaderContainer>
        <a href="/"><img src = {filmelander} alt = "Logomarca Filmelandia" /></a>
        </HeaderContainer>
    )
}

export default Header;
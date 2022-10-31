import * as S from "./header.styles";
import Menu from "./Menu/Menu";

function Header(){
    return(
        <S.Header>
            <S.Logo>
                ChatWithFriends
            </S.Logo>
            <Menu/>
        </S.Header>
    )




}


export default Header;
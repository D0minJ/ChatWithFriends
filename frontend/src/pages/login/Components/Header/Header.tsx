import * as S from "./header.styles"

function Header(){
    return(
        <S.Header>
            <S.Logo>
                Chatty
            </S.Logo>
            <S.Buttons>
                <S.LogInButton>
                    Log In
                </S.LogInButton>
                <S.SignUpButton >
                    Sign up
                </S.SignUpButton>
            </S.Buttons> 
        </S.Header>
    );
}


export default Header;
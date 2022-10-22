import * as S from "./panel.styles"

function Panel(){
    return(
        <S.LoginPanel>
            <S.Logo/>
            <S.UsernameInput placeholder="Username"/>
            <S.PasswordInput placeholder="Password" type="password"/>
            <S.SubmitButton>
                Log In
            </S.SubmitButton>
        </S.LoginPanel>
    )

}


export default Panel
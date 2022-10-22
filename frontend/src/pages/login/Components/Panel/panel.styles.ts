import styled from "styled-components"

export const LoginPanel = styled.div`
    position: absolute;
    vertical-align: top;
    text-align: center;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 400px;
    height: 340px;
    padding: 1rem;
    background-color: #A594F9;
    border-radius: 6px;




`; 

export const Logo = styled.div`


`;

export const UsernameInput = styled.input`
    width: 20em;
    padding: 0.5rem;
    margin: 1rem;
    font-size: 14px;
    border: 1px solid white;
    border-radius: 100px;
    outline: none;
    



`;

export const PasswordInput = styled(UsernameInput)`



`;

export const SubmitButton = styled.button`
    width: 14em;
    font-size: 14px;
    padding: 0.5rem;
    margin: 1rem;
    border: 1px solid #7371FC;
    border-radius: 100px;
    background-color: #7371FC;
    cursor: pointer;



`;

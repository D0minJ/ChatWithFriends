import * as S from "./menu.styles";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";



function Menu(){
    return(
        <React.Fragment>
            <S.MenuButton>
                <AiOutlineMenu size="2em"/>
            </S.MenuButton>
        </React.Fragment>
    )


}


export default Menu;

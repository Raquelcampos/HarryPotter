import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled.js';
export default function Login(){

    return(
     <S.Box>
       
       <S.Container> 
       <h1>SEJA UM BRUXO</h1>
       <S.Form >
        <input type="text" placeholder='Login'/>
        <input type="text" placeholder='senha' />
        <Link to="/Home"><button>ENTRAR</button></Link>
       </S.Form>
       <p>Esqueceu a senha?</p> 
       </S.Container>
     </S.Box>
    )
}
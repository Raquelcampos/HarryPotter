import React from 'react';
import * as S from './styled.js';

export default function Home(){

  return(
    <S.Box>
   <nav>
     <S.Ul>
       <S.SLink to="/Personagens"><li>PERSONAGENS</li></S.SLink>
       <li>CASAS</li>
       <S.SLink to="/"><li>LOGIN</li></S.SLink>
     </S.Ul>
   </nav>
    </S.Box>
  )
}
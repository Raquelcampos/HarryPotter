import React from 'react';
import * as S from './styled.js';
import { Link } from 'react-router-dom';
// import Hp from '../Componets/Img/Hp.png';

export default function Home(){

  return(
    <S.Box>
   <nav>
     <S.Ul>
       <img src="" alt="hp"/>
       <Link to="/Personagens"><li>PERSONAGENS</li></Link>
       <li>CASAS</li>
       <li>SOBRE</li>
       <Link to="/"><li>LOGIN</li></Link>
     </S.Ul>
   </nav>
    </S.Box>
  )
}
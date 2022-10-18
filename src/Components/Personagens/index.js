import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import * as S from './styled.js';

export default function Personagens(){

 const Api = 'https://hp-api.herokuapp.com/api/characters'
 const [personagem, setPersonagem] = useState([])
useEffect( ()=>{
  axios.get(Api).then((response)=>{
 setPersonagem(response.data.slice(0,25))
  })
},[Api])

    return(
        <> 
        <h3>Voltar para a <Link to="/Home"> HOME </Link> </h3>
        <S.Ul>{personagem.map( (item, index) => (
          <S.Section key={index}>
          <img  src={item.image} alt={item.name}/> 
          <div>
          <li >Wizard: {item.name}</li>
          <li >House: {item.house}</li>
          </div>
          </S.Section>
        ))}</S.Ul>
       
        </>
    )
}
import React, {useState , useEfect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Personagens(){

 const Api = 'https://hp-api.herokuapp.com/api/characters'
 const [personagem, setPersonagem] = useState([])
useEfect( ()=>{
  axios.get(Api).then((response)=>{
 setPersonagem(response.data)
  })
},[Api])

    return(
        <>
        <ul>{personagem.map( item => (
          <>
          <li>{item.name}</li>
          <img src={item.image} alt={item.name}/>
          </>
        ))}</ul>
        <Link to="/Home"><button>HOME</button></Link>
        </>
    )
}
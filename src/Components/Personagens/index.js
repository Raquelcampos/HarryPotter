import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Personagens(){

  const [person, setPerson] = useState([])

const API = 'http://hp-api.herokuapp.com/api/characters.'
 
function getPerson(){
  axios.get(API).then((response)=>{
    console.log(response.data.name)
    setPerson(response.data.image)
  })
}
    return(
        <>
        <h1>Personagens</h1>
        <Link to="/Home"><button>HOME</button></Link>
        <div>{getPerson}oi</div>
        <div>{person}ola</div>
        <img src={person} alt="personagens" />
        </>
    )
}
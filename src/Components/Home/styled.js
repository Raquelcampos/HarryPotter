import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Box = styled.div`
background-image:url(https://img.ibxk.com.br/2021/12/15/15113739961211.jpg);
background-size:cover;
background-position: center;
 width:100%;
 height:100vh; 
 object-fit: cover; 
  ul:hover{
    background-color:black;
    opacity:50%;
}
`
export const SLink = styled(Link)`
text-decoration:none;
color: white;
`
export const Ul =styled.ul`
width:100vw;
height:40px;
list-style:none;
display:flex;
align-items:center;
justify-content:space-evenly;
color:white;
li:hover{
cursor:pointer;
}
`
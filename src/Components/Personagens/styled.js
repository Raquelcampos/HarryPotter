import styled from 'styled-components';

export const Ul = styled.ul`
list-style:none;
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`
export const Section =styled.section`
border:solid;
border-radius:20px;
width:40%;
height:200px;
display:flex;
align-items:center;
justify-content: space-evenly; 
margin-bottom:5%;
box-shadow: 10px 5px 5px black;
img{
    width:40%;
    height:95%;
}
div{
    width:50%;
    font-size:20px;
}
@media(max-width:800px){
    width:60%;  
}
@media(max-width:500px){
    width:90%;  
}
`
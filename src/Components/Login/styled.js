import styled from 'styled-components';


export const Box = styled.div`
background-image:url(https://wallpaperaccess.com/full/314147.jpg);
background-size:cover;
background-repeat:no-repeat;
background-position: center;
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content: center;
`
export const Container = styled.div`
border:solid 1px;
width:30%;
height:400px;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
@media(max-width:800px){
    width:50%;
}
@media(max-width:500px){
    width:70%;
}
@media(max-width:380px){
    width:90%;
}
`
export const Form = styled.form`
width:80%;
height:40%;
input{
width:100%;
height:40%;
outline:none;
}
button{
    width:100%; 
    height:20%; 
    color:white;
    background-color:black;
    cursor:pointer;
}
`
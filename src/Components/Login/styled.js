import styled from 'styled-components';


export const Box = styled.div`
background-image:url(https://wallpaperaccess.com/full/314147.jpg);
background-size:cover;
background-repeat:no-repeat;
background-position: center;
width:100vw;
height:100vh;
@media(max-width:700px){
    background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwZSiTtZqMM6HxuZOW2KLqEr_0eDiJcc--w&usqp=CAU);

}
`
export const Container = styled.div`
border:solid 1px;
width:350px;
height:400px;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
position:absolute;
top:20%;
left:35%;
@media(max-width:700px){
   left:30%;
   top:30%;
   color:white;
}
@media(max-width:700px){
    left:15%;
    top:30%;
 }
`
export const Form = styled.form`
width:80%;
height:30%;
input{
width:100%;
height:50%;
outline:none;
}
`
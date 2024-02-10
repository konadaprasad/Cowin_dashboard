import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
flex-direction:column;
background-color:#161625;
padding:40px;
font-family:"roboto";

`
export const Cont = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const Image = Styled.img`
height:40px;
width:40px;
margin:1px;
margin-left:10px;`

export const Heading = Styled.h1`
font-size:25px;
color:${props => (props.para ? '#cbd5e1' : '#2cc6c6')};
font-weight:bold;
margin-left:20px;
`

export const Cont2 = Styled.div`
display:flex;
flex-direction:column;
background-color:#1c1c2b;
padding:20px;
margin-bottom:20px;
`
export const Image1 = Styled.img`
height:300px;
width:400px;
`

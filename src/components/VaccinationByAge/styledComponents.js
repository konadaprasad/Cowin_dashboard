import Styled from 'styled-components'

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

import { PiSelectionDuotone } from "react-icons/pi";

import styled from "styled-components"


export const Header = styled.header`
position: sticky;
display: flex;
flex-direction: row;
gap: 1em;
line-height: 20px;
align-items: center;
justify-content: space-between;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
padding: 0;
margin: 0;
z-index: 100000; ;

`;


export const TitleContainer = styled.div`
line-height: 20px;
align-items: center;
display: flex;
flex-direction: row;
gap: 0.5em
`;

export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0.5em 1em 0 5em;
cursor: pointer;
`

export const Logo = styled.img`
    height: 3em;
    width: 3em;
`;

export const Title = styled.h1`
font-size: 20px;
`

export const NavLinksContainer = styled.div`
display: flex;
gap: 2em;
margin: 0 1em 0 0;

`

export const NavLinks = styled.a`
text-decoration: none;
font-size: 14px;
color: black;
:hover{
    color: red;
}
cursor: pointer;
transition: .3s;
`;



export const Container = styled.div`
display: flex;
flex-direction: row;
margin: 1em 1em 1em 1em;



`

export const Frase = styled.h1`
font-size: 3em;
align-self: center;

`


export const Text = styled.div`

width: 60em;
height: 30em;
align-items: center;
margin-left: 10px;


` 

export const SecondaryFrase = styled.h1`
text-indent:10px;
margin-top: 2em;

`


export const Secondarytext = styled.p`
text-indent: 40px;
font-size: 1.1em;
margin-top: 2.5em;
`



export const MainImage = styled.img`
height: 30em;
width: 30em;
max-width: 50%;

`  
export const Secundaryimg = styled.img`
width: 35em;
height: 30em;
margin: 0em 0em 0em 1em ;
max-width: 50%;


`


export const ThirdContainer = styled.div`
display: flex;
flex-direction: row;
margin: 1em 1em 1em 1em;
height: 30em;
`
export const SecundaryText = styled.div`
width: 60em;
height: 30em;
align-items: center;
`   
export const ThirdFrase = styled.h1`
display: flex;
justify-content: row;
align-items: center;
margin-left: 1em;
width: 7em;
height: 2em;
`



export const  Thirdimg = styled.img`
width: 30em;
height: 30em;
max-width: 50%;
margin: 0em 0em 0em 2em ;
`
export const FourthContainer = styled.div`
display: flex;
flex-direction: row;
margin: 1em 1em 1em 1em;
`

export const ProjectContainer = styled.div`
margin: 1em 8em;    
display: flex;
flex-direction: column;
justify-content: center;
`

export const Projetos = styled.div`

display: flex;
flex-direction: row ;
justify-content: center;
align-items: center;
   
`

export const Cards = styled.div`
display: flex;
margin: 1em 1em 1em 1em;
height: 30em;
width: 20em;
flex-direction: column;
align-items: center;
border-radius: 0.5em;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);



`


export const TextProject = styled.h2`
display: flex;
justify-content: center
;

`

export const CardsText = styled.h4`

`
export const CardsFrase = styled.p`
text-align: center;
margin: 0em 0em 5em 0em;
`

export const CardImg = styled.img`
height: 22em;
width: 20em;
border-radius: 0.5em;
`

export const Contact = styled.div`
background: #8FD9A1;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 2em;
gap: 0.5em;
max-width: 100em;
width: 100%;
height: 30em;
`

export const Input = styled.input`
background-color: #fff;
margin: 5px;
border: none;
box-shadow: 0 0 0 0.1rem #005346;
border-radius: 0.5em;
align-self: center;
padding: 5px;
width: 25em;
height: 3em;
&::placeholder {
    font-family: Poppins;
}  
`
export const TextArea = styled.textarea`
background-color: #fff;
margin: 5px;
border-radius: 0.5em;
align-self: center;
box-shadow: 0 0 0 0.1rem #005346;
padding: 5px;
width: 25em;
height: 12em;
border: none;

&::placeholder {
    font-family: Poppins;
}

`
export const ContactH1 = styled.h1`
color: #fff;
font-size: 2em;
align-self: center ;
`

export const Button = styled.button`
color: #fff;
background-color:   #124022;
border-radius: 0.5em;
align-self: center;
width: 26em;
height: 5em;
border: none;
margin-bottom: 2em;
`
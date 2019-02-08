// Node Modules
import styled, { keyframes } from 'styled-components';

const colors = {
	primary: '#3498db',
	secondary: '#fff',
	tertiary: '#e74c3c'
} 

const changeColors = keyframes`
	from {
		background-position: 0em 0em;  
	}

	to {
		background-position: 100em 100em;
	}
`;

export const Register = styled.div`
	font-family: 'Work Sans', sans-serif;
  	text-transform: uppercase;
	font-weight: 900;
    color: ${colors.primary};
`; 

export const Vote = styled.a`
  	font-family: 'Shrikhand', cursive;
	font-size: 2rem;
    background: #e74c3c;
    background: linear-gradient(to bottom, ${colors.primary} 0%, ${colors.primary} 33%, ${colors.secondary} 33%, ${colors.secondary} 66%,${colors.tertiary} 66%,${colors.tertiary} 100%);
    background-repeat: repeat;
    background-size: 100% 100%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: ${changeColors} 100s linear 1s 1000;
`; 

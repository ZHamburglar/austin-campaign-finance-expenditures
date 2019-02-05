// Node Modules
import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
	height: 50%;
	overflow: hidden;
	line-height: normal;
`;

export const Column = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: blue;
	width: calc(100%);
`;

export const InfoContainer = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
`;

export const MetricContainer = styled.div`
	line-height: 250%;
`;

export const Info = styled.div`
`;

export const Number = styled.div`
	color: white;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;


export const Metric = styled.span`
	color: black;
	text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;
`;

export const VoterButton = styled.a`
	font-size: 80%
	background-color: white;
	color: red;

	&:hover {
    background: blue;
  	}
`;





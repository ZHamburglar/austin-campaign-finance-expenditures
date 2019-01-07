// Node Modules
import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
	height: 50%;
	overflow: hidden;
	line-height: normal;
`;

export const Column = styled.div`
	color: blue;
	width: calc(100% / 3);
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
	font-size: 250%;
	color: white;
`;

export const Metric = styled.span`
	font-size: 50%;
	color: grey;
`;

export const VoterButton = styled.a`
	font-size: 80%
	background-color: white;
	color: red;

	&:hover {
    background: blue;
  	}
`;





// Node Modules
import styled from 'styled-components';

export const AppContainer = styled.div`
    text-align: center;
    background-color: red;
    background-image : url('../../assets/images/coadowntown.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    font-family: "Roboto";
    min-height: 100vh;
    width: 100%;

	@media (max-width : 768px) {
		width: 100%;
		background-color: purple;
	}
	
`;

export const MainContainer = styled.div`
	position: absolute;
	margin-top: 5vh;
	width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
	background-color: blue;

	@media (max-width : 768px) {
		margin-top: 0vh;
		position: absolute;
		height: 100%;
	}
`;

export const Main = styled.div`
    background-color: rgba(66,87,102, .95);
	height: 95%;
    width: 95%;
	position: relative;

	@media (max-width:768px) {
    	width: 98%;
		height: 100%;
	}
`;

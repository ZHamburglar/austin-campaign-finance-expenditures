// Node Modules
import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Main = styled.div`
    margin-top: 5%;
    background-color: rgba(66,87,102, .6);
    height: calc(100vh - 40px);
    width: calc(100% - 40px);
`;

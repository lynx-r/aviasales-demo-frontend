import styled from "styled-components";

export const Container = styled.div`
background-color: ${props => props.filled ? '#9B9B9B' : ''};
border-radius: 50%;
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
margin: 4px;
`;

import styled from "styled-components";

export const Container = styled.div`
background-color: ${props => props.filled ? '#9B9B9B' : ''};
border-radius: 50%;
width: ${props => props.width}px;
height: ${props => props.height}px;
display: inline-flex;
align-items: center;
justify-content: center;
margin: 4px;
`;

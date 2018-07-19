import styled from "styled-components";

export const Container = styled.div`
background: linear-gradient(119.26deg, #00B0DE -25.78%, #01AEDC -22.1%, 
#02ABDB -18.38%, #02ABDB -14.68%, #02ABDB -14.46%, #196EBD 73.68%);
margin-top: 48px;
width: 100%;
height: 281px;
`;

export const InnerContainer = styled.div`
height: 281px;
`;

export const MobilePhone = styled.div`
position: relative;
top: -27px;
width: 234px;
height: 308px;
background: url("img/mobile-phone.png") no-repeat;
`;

export const MobileTitle = styled.h2`
margin-top: 66px;
font-size: 32px;
line-height: 40px;
text-align: start;
color: white;
`;

export const Rating = styled.div`

`;

export const RatingStars = styled.div`
width: ${props => props.width}px;
overflow: hidden;
white-space: nowrap;
margin-right: 8px;
`;

export const RatingDescription = styled.div`
font-size: 14px;
line-height: 20px;
color: white;
`;

export const Brands = styled.div`
margin-top: 40px;
`;
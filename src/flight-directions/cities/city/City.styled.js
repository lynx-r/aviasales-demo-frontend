import styled from "styled-components";

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
border-radius: 8px;
margin: 6px;
`;

export const CityLocation = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const CityCover = styled.img`
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
`;


export const CityName = styled.div`
font-style: normal;
font-weight: bold;
line-height: 32px;
font-size: 22px;

color: #5B5B5C;
`;

export const CountryName = styled.div`
font-weight: 500;
line-height: 20px;
font-size: 12px;

color: #A0B0B9;
text-transform: uppercase;
text-align: start;
`;

export const FindPriceFrom = styled.div`
font-weight: normal;
line-height: 32px;
font-size: 22px;
text-align: right;

color: #00BAE8;
`;

export const Date = styled.div`
font-style: normal;
font-weight: 500;
line-height: 20px;
font-size: 12px;
text-align: right;

color: #A0B0B9;
`;
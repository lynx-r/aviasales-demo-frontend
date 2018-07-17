import React from "react";
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid/Grid";

const StyledIcon = styled.div`
    width: 89px;
`;

const DirectionLabel = styled.div`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    color: #00ACE2;
`;

export class DirectionIcon extends React.Component {
    render() {
        return (
            <StyledIcon>
                <Grid direction={"column"} container>
                    <div>{this.props.svg}</div>
                    <DirectionLabel>{this.props.label}</DirectionLabel>
                </Grid>
            </StyledIcon>
        )
    }
}

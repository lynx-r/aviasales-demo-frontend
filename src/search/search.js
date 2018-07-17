import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import {Logo} from "./logo";
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";
import orange from "@material-ui/core/colors/orange";

const styles = theme => ({
    searchBox: {
        height: '100%'
    },
    textField: {
        backgroundColor: 'white'
    },
    bootstrapRoot: {
        width: 'calc(20% - 24px)',
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(20% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapSelect: {
        width: 'calc(20% - 34px)',
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
    button: {
        '&:hover': {
            backgroundColor: orange[700],
        },
        textTransform: 'none',
        background: '#FF9241',
        borderRadius: '4px',
        marginTop: '48px',
        height: '64px',
        width: '308px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        lineHeight: 'normal',
        fontSize: '28px',
        color: 'white'
    },
    airplane: {
        marginLeft: '24px'
    }
});

const StyledSearch = styled.div`
    background: linear-gradient(119.26deg, #00B0DE -25.78%, #01AEDC -22.1%, 
    #02ABDB -18.38%, #02ABDB -14.68%, #02ABDB -14.46%, #196EBD 73.68%);
    height: 100vh;
    width: 100%;
`;

const Title = styled.h1`
    color: white;
    font-size: 40px;
    line-height: 48px;
    margin: 0;
`;

const Subtitle = styled.h2`
    color: white;
    line-height: normal;
`;

class Search extends React.Component {
    state = {
        ticketClass: ''
    };

    ticketClasses = [
        {value: 1, label: '1 пассажир, эконом'},
        {value: 2, label: '2 пассажира, эконом'},
    ];

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <StyledSearch>
                <Logo top={'20%'}/>
                <Grid container
                      className={classes.searchBox}
                      alignItems='center'
                      justify='center'
                      direction='column'
                >
                    <Title>Поиск дешевых авиабилетов</Title>
                    <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid direction='row'
                              container
                        >
                            <Input
                                placeholder='Москва'
                                disableUnderline={true}
                                className={classes.bootstrapInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        MOW
                                        <IconButton>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5 8L0 4L5 0V3H16V5H5V8Z"
                                                      fill="#1BA6D2"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5 8L0 4L5 0V3H16V5H5V8Z"
                                                      transform="translate(16 18) rotate(-180)" fill="#1BA6D2"/>
                                            </svg>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <Input
                                placeholder='Город прибытия'
                                disableUnderline={true}
                                className={classes.bootstrapInput}
                            />
                            <Input
                                placeholder='Туда'
                                disableUnderline={true}
                                className={classes.bootstrapInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M3.99738 4.01138V0H4.99701V4.01138H3.99738ZM14.0067 4.97678L14.0103 3.01105L16.9954 3.01385L16.9987 20H0.000244141L0.00115967 16.0002L0.997986 15.9945L1.01135 19.0092L15.9993 19.0067L16.0081 6.93909L1.00842 6.96326V15.9719L0 15.9857L0.00140381 3.01385L2.97064 3.01508L2.97681 4.97183L6.00049 4.97031L6.00677 3.00375L10.9993 3.01587V4.97678H14.0067ZM11.9944 0V4.01138H12.9941V0H11.9944ZM13.9987 15H10.9987V17H13.9987V15ZM6.99872 15H9.99872V17H6.99872V15ZM5.99872 15H2.99872V17H5.99872V15ZM10.9987 12H13.9987V14H10.9987V12ZM9.99872 12H6.99872V14H9.99872V12ZM2.99872 12H5.99872V14H2.99872V12ZM13.9987 9H10.9987V11H13.9987V9ZM6.99872 9H9.99872V11H6.99872V9ZM5.99872 9H2.99872V11H5.99872V9Z"
                                                      transform="translate(0.00128174)" fill="#1BA6D2"/>
                                            </svg>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <Input
                                placeholder='Обратно'
                                disableUnderline={true}
                                className={classes.bootstrapInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M3.99738 4.01138V0H4.99701V4.01138H3.99738ZM14.0067 4.97678L14.0103 3.01105L16.9954 3.01385L16.9987 20H0.000244141L0.00115967 16.0002L0.997986 15.9945L1.01135 19.0092L15.9993 19.0067L16.0081 6.93909L1.00842 6.96326V15.9719L0 15.9857L0.00140381 3.01385L2.97064 3.01508L2.97681 4.97183L6.00049 4.97031L6.00677 3.00375L10.9993 3.01587V4.97678H14.0067ZM11.9944 0V4.01138H12.9941V0H11.9944ZM13.9987 15H10.9987V17H13.9987V15ZM6.99872 15H9.99872V17H6.99872V15ZM5.99872 15H2.99872V17H5.99872V15ZM10.9987 12H13.9987V14H10.9987V12ZM9.99872 12H6.99872V14H9.99872V12ZM2.99872 12H5.99872V14H2.99872V12ZM13.9987 9H10.9987V11H13.9987V9ZM6.99872 9H9.99872V11H6.99872V9ZM5.99872 9H2.99872V11H5.99872V9Z"
                                                      transform="translate(0.00128174)" fill="#1BA6D2"/>
                                            </svg>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <Select
                                value={this.state.ticketClass}
                                displayEmpty
                                onChange={this.handleChange('ticketClass')}
                                className={classNames(classes.bootstrapSelect, classes.bootstrapInput)}
                                input={
                                    <Input disableUnderline={true}/>
                                }
                            >
                                <MenuItem value="">
                                    <em>Пассажиры и класс</em>
                                </MenuItem>
                                {this.ticketClasses.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Button
                            className={classes.button}
                        >
                            Найти билеты
                            <svg className={classes.airplane} width="26" height="21" viewBox="0 0 26 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11.1586 8.94891H5.22021L1.49152 5.96597L0 6.7117L1.74078 9.61298C1.58307 9.84973 1.49152 10.1343 1.49152 10.4404C1.49152 10.654 1.53577 10.8564 1.61566 11.0393L0 14.1692L1.49152 14.9149L5.22021 11.9319H11.1862L7.45746 20.8809H10.4404L16.4064 11.9319H23.8625C24.6922 11.9319 25.3553 11.2642 25.3553 10.4404C25.3553 9.61096 24.687 8.94891 23.8625 8.94891H16.4064L10.4404 0H7.45746C7.45746 0 9.84949 5.87305 11.1862 8.94891H11.1586Z"
                                      transform="translate(0 0.119141)" fill="white"/>
                            </svg>
                        </Button>
                    </form>
                </Grid>
            </StyledSearch>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
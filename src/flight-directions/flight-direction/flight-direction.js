import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";
import React from "react";
import {Compas} from "./compos";
import styled from 'styled-components';
import {DirectionIcon} from "./direction-icon";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    flightDirection: {
        marginTop: '60px'
    },
    flightBlock: {
    }
});

const StyledCity = styled.span`
    color: #00ACE2;
`;

const StyledDirections = styled.div`
    width: 437px;
    height: 72px;
    margin: 0 auto;

    font-weight: 500;
    line-height: 36px;
    font-size: 24px;
    text-align: center;
`;

class FlightDirection extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.flightBlock}>
                <Compas/>
                <StyledDirections>
                    Популярные направления перелетов из города
                    <StyledCity>
                        &nbsp;
                        Москва
                        &nbsp;
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 11.2515V15.0015H3.75L11.81 6.94147L8.06 3.19147L0 11.2525V11.2515ZM14.71 4.04144C14.8972 3.8546 15.0024 3.60095 15.0024 3.33644C15.0024 3.07193 14.8972 2.81829 14.71 2.63144L12.37 0.292444C12.1832 0.105216 11.9295 0 11.665 0C11.4005 0 11.1468 0.105216 10.96 0.292444L9.13 2.12244L12.88 5.87244L14.71 4.04244V4.04144Z"
                                  transform="translate(0 0.000549316)" fill="#00ACE2"/>
                        </svg>
                    </StyledCity>
                </StyledDirections>
                <Grid container className={classes.flightDirection} justify={"center"}>
                    <DirectionIcon label="КУДА УГОДНО"
                                   svg={
                                       <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(16 12)" fill="white"/>
                                           </g>
                                           <path fillRule="evenodd" clipRule="evenodd"
                                                 d="M0 11C0 4.92798 4.91699 0 10.989 0C17.072 0 22 4.92798 22 11C22 17.072 17.072 22 10.989 22C4.91699 22 0 17.072 0 11ZM15.367 6.59998H18.612C17.556 4.78491 15.873 3.37695 13.849 2.68396C14.509 3.90491 15.015 5.22498 15.367 6.59998ZM11 2.24402C11.913 3.56396 12.628 5.02698 13.101 6.59998H8.89899C9.37198 5.02698 10.087 3.56396 11 2.24402ZM2.20001 11C2.20001 11.759 2.31 12.4961 2.48602 13.2001H6.20401C6.116 12.474 6.05002 11.748 6.05002 11C6.05002 10.2521 6.116 9.526 6.20401 8.80005H2.48602C2.31 9.50403 2.20001 10.2411 2.20001 11ZM3.388 15.4H6.633C6.98499 16.775 7.491 18.095 8.151 19.316C6.12701 18.623 4.444 17.2261 3.388 15.4ZM3.388 6.59998H6.633C6.98499 5.22498 7.491 3.90491 8.151 2.68396C6.12701 3.37695 4.444 4.77393 3.388 6.59998ZM11 19.756C10.087 18.436 9.37198 16.973 8.89899 15.4H13.101C12.628 16.973 11.913 18.436 11 19.756ZM8.25 11C8.25 11.748 8.327 12.474 8.42599 13.2001H13.574C13.673 12.474 13.75 11.748 13.75 11C13.75 10.2521 13.673 9.51501 13.574 8.80005H8.42599C8.327 9.51501 8.25 10.2521 8.25 11ZM13.849 19.316C14.509 18.095 15.015 16.775 15.367 15.4H18.612C17.556 17.215 15.873 18.623 13.849 19.316ZM15.95 11C15.95 11.748 15.884 12.474 15.796 13.2001H19.514C19.69 12.4961 19.8 11.759 19.8 11C19.8 10.2411 19.69 9.50403 19.514 8.80005H15.796C15.884 9.526 15.95 10.2521 15.95 11Z"
                                                 transform="translate(29 25)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="80" height="80"
                                                       filterUnits="userSpaceOnUse"
                                                       colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="4"/>
                                                   <feGaussianBlur stdDeviation="8"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.12 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic"
                                                            in2="effect1_dropShadow" result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                    <DirectionIcon label={"СОЛНЦЕ И МООРЕ"}
                                   svg={
                                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(4 2)" fill="white"/>
                                           </g>
                                           <path
                                               d="M1.7842 3.09455C2.8226 2.26046 4.0942 2.02324 5.4692 2.14377C7.3975 2.30924 9.0508 3.0649 10.6194 3.98698L10.9714 4.19742C11.0187 4.03959 11.0594 3.90472 11.0979 3.7689C11.4411 2.57324 12.0527 1.51342 13.2033 0.736722C14.7763 -0.323104 16.7178 -0.187278 18.1863 0.810374C16.2129 1.05524 14.8841 2.08924 13.6961 3.42837C14.2901 3.35185 14.7961 3.27533 15.3021 3.22272C16.3284 3.1175 17.3514 3.12898 18.3546 3.36333C20.2246 3.80142 21.2982 4.89759 21.7096 6.49116C21.8636 7.07942 21.9054 7.68872 21.9989 8.28942L21.8999 8.32481C21.7822 8.21672 21.6689 8.10863 21.5479 8.00246C20.2972 6.88333 18.8386 6.06837 17.0357 5.78907C15.9907 5.62646 14.9545 5.66185 13.9579 6.02437C13.8072 6.07794 13.6675 6.15542 13.5267 6.22142C16.0633 6.47011 17.941 7.63516 19.3809 9.34255C20.8802 11.1188 20.9462 13.0271 19.7846 14.9688C19.1939 15.9569 18.0796 17.1248 17.105 17.8116C17.0764 17.4768 17.061 17.1573 17.0192 16.8407C16.7475 14.7421 16.1535 12.7248 14.9215 10.8816C14.3429 10.015 13.618 9.25742 12.5675 8.78107C12.4531 8.72942 12.3343 8.68829 12.1715 8.6242C12.155 8.78203 12.1352 8.91307 12.1297 9.04507C12.0241 11.5158 11.7777 13.974 11.0924 16.3845C10.7404 17.6279 10.2982 18.8456 9.5414 19.9599C9.5161 19.9982 9.2598 20.2823 9.2598 20.2823C8.8891 20.6993 8.096 21.0351 7.491 21.0332L3.4595 21.0198C2.2451 21.015 1.969 20.4076 2.8292 19.6682C2.8292 19.6682 3.9072 18.7691 5.0314 17.714C7.4492 15.4442 8.8616 12.7525 9.3764 9.70603C9.4314 9.37698 9.4842 9.04603 9.5491 8.64907C7.4811 9.28324 5.8751 10.3689 4.5683 11.8018C3.2538 13.2442 2.4849 14.8703 2.4266 16.7307C2.3903 16.7231 2.3551 16.725 2.3386 16.7116C1.2881 15.7646 0.4653 14.7086 0.2178 13.3829C-0.0352 12.0151 0.3652 10.7687 1.276 9.65629C2.706 7.90777 4.6453 6.79629 7.0873 6.36107C7.3106 6.3209 7.5405 6.30368 7.7693 6.29029C7.9926 6.27881 8.2181 6.28837 8.5107 6.28837C8.1202 5.9249 7.6857 5.73168 7.2127 5.60924C6.0555 5.31272 4.906 5.42272 3.7675 5.68577C2.4079 6.00142 1.1605 6.51507 0 7.32907C0.0726 5.70298 0.3795 4.21846 1.7842 3.09168V3.09455Z"
                                               transform="translate(18 15.9545)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="56" height="56"
                                                       filterUnits="userSpaceOnUse"
                                                       colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="2"/>
                                                   <feGaussianBlur stdDeviation="2"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.1 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic"
                                                            in2="effect1_dropShadow" result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                    <DirectionIcon label={"ШОПИНГ, ГОРОД"}
                                   svg={
                                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(4 2)" fill="white"/>
                                           </g>
                                           <path fillRule="evenodd" clipRule="evenodd"
                                                 d="M16.21 8.08215L11.83 0.486328C11.64 0.162109 11.32 0 11 0C10.68 0 10.36 0.162109 10.17 0.497925L5.78998 8.08215H1C0.450012 8.08215 0 8.60315 0 9.23999C0 9.34424 0.0100098 9.44836 0.039978 9.55261L2.58002 20.2864C2.81 21.2589 3.58002 21.9768 4.5 21.9768H17.5C18.42 21.9768 19.19 21.2589 19.43 20.2864L21.97 9.55261L22 9.23999C22 8.60315 21.55 8.08215 21 8.08215H16.21ZM8 8.08215L11 2.98743L14 8.08215H8ZM9 15.0294C9 16.3031 9.90002 17.3452 11 17.3452C12.1 17.3452 13 16.3031 13 15.0294C13 13.7557 12.1 12.7136 11 12.7136C9.90002 12.7136 9 13.7557 9 15.0294Z"
                                                 transform="translate(17 15)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="56" height="56"
                                                       filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="2"/>
                                                   <feGaussianBlur stdDeviation="2"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.1 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                                            result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                    <DirectionIcon label={"КУЛЬТУРА И ИСТОРИЯ"}
                                   svg={
                                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(4 2)" fill="white"/>
                                           </g>
                                           <path fillRule="evenodd" clipRule="evenodd"
                                                 d="M11 0L0 5.23804V6.28577C0 6.86816 0.488403 7.33337 1.09119 7.33337H20.9088C21.4995 7.33337 22 6.86401 22 6.28577V5.23804L11 0ZM5.5 10.4762V15.7144C6.10834 15.7196 6.60004 16.1826 6.60004 16.762C6.60004 17.3402 6.11383 17.8096 5.48901 17.8096H3.31104C2.6972 17.8096 2.20001 17.3444 2.20001 16.762C2.20001 16.1858 2.68182 15.7196 3.29999 15.7144V10.4762C2.69171 10.4709 2.20001 10.0079 2.20001 9.42859C2.20001 8.85034 2.68622 8.38098 3.31104 8.38098H5.48901C6.10278 8.38098 6.60004 8.84607 6.60004 9.42859C6.60004 10.0048 6.11823 10.4709 5.5 10.4762ZM12.1 15.7144V10.4762C12.7182 10.4709 13.2 10.0048 13.2 9.42859C13.2 8.84607 12.7028 8.38098 12.089 8.38098H9.91101C9.28619 8.38098 8.79999 8.85034 8.79999 9.42859C8.79999 10.0079 9.29169 10.4709 9.89996 10.4762V15.7144C9.2818 15.7196 8.79999 16.1858 8.79999 16.762C8.79999 17.3444 9.29718 17.8096 9.91101 17.8096H12.089C12.7127 17.8096 13.2 17.3402 13.2 16.762C13.2 16.1826 12.7083 15.7196 12.1 15.7144ZM18.7 15.7144V10.4762C19.3182 10.4709 19.8 10.0048 19.8 9.42859C19.8 8.84607 19.3028 8.38098 18.689 8.38098H16.511C15.8862 8.38098 15.4 8.85034 15.4 9.42859C15.4 10.0079 15.8917 10.4709 16.5 10.4762V15.7144C15.8818 15.7196 15.4 16.1858 15.4 16.762C15.4 17.3444 15.8972 17.8096 16.511 17.8096H18.689C19.3127 17.8096 19.8 17.3402 19.8 16.762C19.8 16.1826 19.3083 15.7196 18.7 15.7144ZM0 19.9048C0 19.3254 0.500488 18.8572 1.09119 18.8572H20.9088C21.5116 18.8572 22 19.3213 22 19.9048V20.9524C22 21.5317 21.4995 22 20.9088 22H1.09119C0.488403 22 0 21.5359 0 20.9524V19.9048Z"
                                                 transform="translate(17 15)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="56" height="56"
                                                       filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="2"/>
                                                   <feGaussianBlur stdDeviation="2"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.1 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                                            result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                    <DirectionIcon label={"НОЧНАЯ ЖИЗНЬ"}
                                   svg={
                                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(4 2)" fill="white"/>
                                           </g>
                                           <path fillRule="evenodd" clipRule="evenodd"
                                                 d="M22 1.22217V2.44446L12.2222 13.4445V19.5555H17.1111C17.7906 19.5555 18.3333 20.1031 18.3333 20.7778C18.3333 21.4573 17.7833 22 17.1086 22H4.89136C4.224 22 3.66669 21.4524 3.66669 20.7778C3.66669 20.0983 4.21423 19.5555 4.88892 19.5555H9.77777V13.4445L0 2.44446V1.22217C0 0.542725 0.543884 0 1.21368 0H20.7863C21.4561 0 22 0.547607 22 1.22217ZM5.05756 3.97839C5.51837 4.4856 6.42523 4.88892 7.09503 4.88892H14.8916C15.554 4.88892 16.4768 4.48193 16.9351 3.97839L18.3334 2.44446H3.66669L5.05756 3.97839Z"
                                                 transform="translate(17 16)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="56" height="56"
                                                       filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="2"/>
                                                   <feGaussianBlur stdDeviation="2"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.1 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                                            result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                    <DirectionIcon label={"ОТДЫХ С ДЕТЬМИ"}
                                   svg={
                                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <g filter="url(#filter0_d)">
                                               <path fillRule="evenodd" clipRule="evenodd"
                                                     d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                                     transform="translate(4 2)" fill="white"/>
                                           </g>
                                           <path fillRule="evenodd" clipRule="evenodd"
                                                 d="M12.7368 8.80005V0C17.8547 0 22 3.93799 22 8.80005H12.7368ZM22 9.8999C22 11.924 21.2705 13.7939 20.0547 15.2789C20.8884 15.9829 21.4211 17.006 21.4211 18.1499C21.4211 20.2729 19.6031 22 17.3684 22C15.3305 22 13.64 20.5699 13.3621 18.7H10.9537C10.6758 20.5699 8.98529 22 6.94739 22C4.71265 22 2.89471 20.2729 2.89471 18.1499C2.89471 16.687 3.75159 15.411 5.02527 14.762C4.75897 14.377 2.57056 9.8999 2.57056 9.8999H0V7.69995H4.04108L5.14105 9.8999H22ZM6.94733 19.8C5.98633 19.8 5.21051 19.063 5.21051 18.15C5.21051 17.2371 5.98633 16.5 6.94733 16.5C7.90839 16.5 8.6842 17.2371 8.6842 18.15C8.6842 19.063 7.90839 19.8 6.94733 19.8ZM15.6316 18.15C15.6316 19.063 16.4074 19.8 17.3684 19.8C18.3295 19.8 19.1053 19.063 19.1053 18.15C19.1053 17.2371 18.3295 16.5 17.3684 16.5C16.4074 16.5 15.6316 17.2371 15.6316 18.15Z"
                                                 transform="translate(17 15)" fill="#A0B0B9"/>
                                           <defs>
                                               <filter id="filter0_d" x="0" y="0" width="56" height="56"
                                                       filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                   <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                   <feColorMatrix in="SourceAlpha" type="matrix"
                                                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                                                   <feOffset dy="2"/>
                                                   <feGaussianBlur stdDeviation="2"/>
                                                   <feColorMatrix type="matrix"
                                                                  values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0.1 0"/>
                                                   <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow"/>
                                                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                                            result="shape"/>
                                               </filter>
                                           </defs>
                                       </svg>
                                   }/>
                </Grid>
            </div>
        )
    }
}

FlightDirection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlightDirection);
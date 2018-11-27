import styled from 'styled-components';

export const CataLogsContainer = styled.div`
    width:100%;
    height: 405px;
    padding : 15px;
    display : flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;
    box-sizing: border-box;
    text-decoration: none;
`

export const CataLogsContainerItem = styled.div`
    width: 105px !important;
    height: 105px;
    margin : 10px 0 ;
    display:inline-block;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
`
export const CataLogsContainerItemImg = styled.span`
    display : block;
    width:50px;
    height:50px;
    margin : 15px 27.5px 8px 27.5px;
    background-image : ${props=>`url(${props.pic})`};
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`
export const CataLogsContainerItemText = styled.span`
    font-size : 14px;
`
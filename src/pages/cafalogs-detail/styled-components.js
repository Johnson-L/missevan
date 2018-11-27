import styled from 'styled-components';

export const CataLogsLittleBox = styled.div`
    
    position : relative;
    height :2000px; 
    padding-top : 40px;
`

export const CataLogsLittleBoxTittle = styled.div`
    height:39px;
    line-height:40px;
    text-align:center;
    border-bottom: 1px solid #e0e0e0;
    font-size:16px;
    background:white;
    position : fixed;
    top : 40px;
    width : 100%;
`
export const CataLogsLittleBoxCheck = styled.div`
    height:35px;
    border-bottom: 1px solid #e0e0e0;
    line-height:35px;
`
export const CataLogsLittleBoxContent = styled.div`
    height:406px;
    padding-bottom : 16px;
    margin : 10px 0 ;
    min-height:400px;
    background:transparent;
`
export const CataLogsLittleBoxContentTitle = styled.div`
    height : 20px;
    padding : 0 14px;
    line-height:20px;
    margin: 10px 0 ;
    display:flex;
    justify-content : space-between;
    font-size:16px;
`
export const CataLogsLittleBoxContentBody = styled.div`
    height:360px;
    margin : 0 14px;
`
export const CataLogsLittleBoxContentItem = styled.div`
    height : 90px;
    line-height:90px;
    border-bottom : 1px solid #e0e0e0;
`
export const CataLogsLittleBoxContentItemImg = styled.div`
    width: 70px;
    height : 70px;
    margin : 10px;
    float : left;
    border-radius : 4px;
    overflow : hidden;
`
export const CataLogsLittleBoxContentItemImgImg = styled.img`
    display : block;
`



export const CataLogsLittleBoxContentItemA = styled.a`
    width: calc(100% - 90px);
    display : block;
    height: 90px;
    padding : 10px 0 ;
    float : right;
    overflow : hidden;
`
export const CataLogsLittleBoxContentItemATitle = styled.div`
    width: 94%;
    height: 36px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 18px;
    color: #616161;
    font-size:16px;
`
export const CataLogsLittleBoxContentItemAUser = styled.div`
    width: 86%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: #9e9e9e;
    font-size : 12px;
`
export const CataLogsLittleBoxContentItemAVideo = styled.div`
    height : 12px;
    line-height:12px;
    color: #9e9e9e;
    font-size : 12px;
`















//导航栏
export const CataLogsLittleBoxCheckUl = styled.ul`
    position: fixed;
    top: 79px;
    height: 35px;
    line-height: 35px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    z-index: 10;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    overflow-x: auto;
    /* ::-webkit-scrollbar : display:none; */

`
export const CataLogsLittleBoxCheckUlItem = styled.li`
    display : inline-block;
    height: 100%;
    margin : 0 10px;
`
export const CataLogsLittleBoxCheckUlA = styled.a`
    display : block;
    color: black;
    font-size: 14px;
    width : 100%;
    height: calc(100% - 2px);
`


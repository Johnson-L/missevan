import styled from 'styled-components';


export const RankWrapper = styled.header`
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 40px;

    
`;


export const RankHeader = styled.header`
    position:fixed;
    left: 0;
    top : 40px; 
    display: block;
    width: 100%;
    line-height: 40px;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #e0e0e0;
    z-index: 9;


`;

export const RankContent = styled.div`

    &>a {
        display: flex;
        position: relative;
        height: 130px;
        width: 100%;
        padding: 10px;
        justify-content: space-around;
        align-items: center;
        appearance : none;
        &::after{
            content: "";
            display: block;
            position: absolute;
            width: 90%;
            bottom: 0;
            border-bottom: 1px solid #e0e0e0;
        }
    }

`;




export const RankList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    height: 100%;
    width: 60%;
`;

export const RankItem = styled.span`
    position: relative;
    width: 100%;
    height: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 13px;
    color: #9e9e9e;
`;


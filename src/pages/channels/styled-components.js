import styled from 'styled-components';

export const ChannelsTabWrapper = styled.div`
    &.channels-tabs-wrap{
        display: flex;
    }
    margin: 0;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    
    position: relative;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    font-size: 12px;
    a{
        position: relative;
        display: inline-block;
        text-align: center;
        flex: 1 1 auto;
        z-index: 0;
        font-size: 16px;
        color: #333;
        &::after{
            content: "";
            width: 74px;
            height: 100%;
            display: block;
            position: absolute;
            bottom: -1px;
            margin: 0 -webkit-calc((100% - 74px)/2);
            margin: 0 -moz-calc((100% - 74px)/2);
            margin: 0 calc((100% - 74px) / 2);
            border-bottom: 2px solid transparent;
            z-index: 1;
        }
        &.active{
            color: #c14a3f;
            border-color: #c14a3f;
        }
        &.active::after{
            color: #c14a3f;
            border-color: #c14a3f;
        }
    }
`;




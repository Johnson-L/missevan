import styled from 'styled-components';

export const AppHomeWrapper = styled.div`
    display: block;
    position: relative;
    min-height: calc(100vh - 120px);
`;

export const AppHomeNav = styled.div`
      
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    font-size: 12px;
    margin: 6px 0;

    &.light {
        margin: 0;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
    }
    a{
        position: relative;
        display: inline-block;
        text-align: center;
        flex: 1 1 auto;
        cursor: pointer;
        z-index: 0;
        font-size: 16px;
        color: #9e9e9e;
        transition: .2s ease;
        &::after{
            content: "";
            width: 74px;
            height: 100%;
            display: block;
            position: absolute;
            bottom: -1px;
            margin: 0 calc((100% - 74px) / 2);
            border-bottom: 2px solid transparent;
            z-index: 1;
        }
        &.active{
            &::after{
                color: #000;
                border-color: #000;

            }
        }
    }

`;

export const AppHomeContent = styled.div`
    padding: 12px;
    position: relative;
    min-height: calc(100vh - 160px);
    padding: 0;
`;







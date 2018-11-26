import styled from "styled-components";

export const AlbumsWrapper=styled.div`

`
export const AlbumsContent= styled.div`
    width:100%;
    margin: 0.26rem auto;
    overflow:hidden;
`

export const AlbumsTitle= styled.div`
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.26rem 0;
    padding: 0 0.37333rem;
`
export const TitleLeft= styled.div`
    font-size:0.42rem;
    position: relative;
    padding-left: 0.26667rem;
    /* float:left; */
    display:inline-block;
    &:before{
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 10%;
        height: 80%;
        background-color: #000;
        width: 0.106667rem;
        /* -webkit-border-radius: 4px;
        -moz-border-radius: 4px; */
        border-radius: 0.106667rem;
    }
`
export const TitleRight= styled.div`
    display:inline-block;
    float:right;
    span{
        display: block;
        position: relative;
        float: right;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 0.533rem;
        width: 1.706667rem;
        height: 0.64rem;
        line-height: 0.64rem;
        font-size: 0.3466rem;
        text-align: center;
        color: #757575;
        &:after{
            content: "";
            display: block;
            position: relative;
            float: right;
            top:0.18667rem;
            right: 0.32rem;
            width:0.21333rem;
            height: 0.21333rem;
            box-sizing: border-box;
            border: 1px solid #757575;
            border-bottom: none;
            border-left: none;
            transform: rotate(45deg);
        }
    }
`
export const AlbumsItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.26rem 0;
    min-height: 8.5333rem;
    justify-content: space-around;
    align-items:center;
`
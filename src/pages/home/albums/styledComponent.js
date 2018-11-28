import styled from "styled-components";

export const AlbumsWrapper=styled.div`
    position:relative;
    /* height:calc(100vh - 150px);
    overflow:hidden; */
`
export const AlbumsContent= styled.div`
    width:100%;
    margin: 0.26rem auto;
    overflow: hidden;
    padding-bottom: 0;
    /* padding:0; */
`

export const AlbumsTitle= styled.div`
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.26rem 0;
    padding: 0 0.37333rem;
    display:flex;
    position:relative;
    justify-content:space-between;
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
    min-height: 11rem;
    justify-content: space-around;
    align-items:center;
    margin: 0 14px;
   
   
`
export const AlbumsItem= styled.div`  
    width: calc((100vw - 28px) / 2 - 10px);
    margin: 0 0 10px;
    border:none;    
`
export const ItemTitle=styled.div`
    color: #616161;
    font-size: 13px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    height: 40px;
    word-break: break-all;
    width:100%;
    margin-top: 6px;
`

export const ItemCover=styled.div`
    height: calc((100vw - 28px) / 2 - 10px);
    border: none;
    width:100%;
    border-radius: 4px;
    background-color: #fff;
    position: relative;
    img{
        width:100%;
        display:block;
    border-radius: 4px;

    }

`

export const ItemCoverSound=styled.div`
    height: 36px;
    line-height: 24px;
    background: linear-gradient(180deg,transparent,rgba(0,0,0,.26));
    border-bottom-right-radius: 4px;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    span{
        display: block;
        position: absolute;
        bottom:0;
        right: 5px;
        padding-left: 14px;
        font-size: 12px;
        color: #fff;
        text-shadow: 0.5px 0 1px #000;
        &:before{
            background-size: 56px 55px;
            background-position: 0 -44px;
            content: "";
            display: block;
            position: absolute;
            margin: 8px 0 3px;
            left: 0;
            height: 11px;
            width: 13px;
            background-image: url(//static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
        }
    }
`
export const ItemCoverMore=styled.div`
    width: 80%;
    height: 30px;
    margin: 10px auto;
    background-color: #e0e0e0;
    font-size: 14px;
    text-align:center;
    line-height:30px;
`
export const AlbumMask = styled.div`
    position:absolute;
    height: calc(100% + 1.06667rem);
    width: 100%;
    left: ${(props)=>props.isShow ? "0" : "100%" };
    background-color: #f5f5f5;
    transition: left .5s;
    z-index:23;
    padding-top: 1.06667rem;
    top: -1.3333rem;
    overflow: auto;
`
export const MaskTitle=styled.div`
     display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
    background-color: #fff;
    color: #262626;
    span{
        display: block;
        position: absolute;
        left: 10px;
        color: #9e9e9e;
    }
`

export const MaskRows=styled.div`
    display: block;
    position: relative;
    margin: 0 0 10px;
    background-color: #fff;
    color: #3d3d3d;
    font-size: 14px;
    overflow: hidden;
    ${(props)=>(props.isactive ?  "color: #000" :"" )} ;

    ${(props)=>props.className==="type" ?    " padding-left: 100px" : ""};
    
    span{
        display: block;
        text-align:center; 
        position: relative;
        height: 46px;
        line-height: 46px;
        text-align: center;
        box-sizing: border-box;
        /* border: 1px solid ; */
        border:1px solid #e1e1e1;
        margin: 6px auto;
        width: calc(100% - 20px);
        ${(props)=>(props.isactive ?  "border:1px solid #000" :"" )} ;

}
`
export const MaskType=styled.div`
        display: block;
        position: absolute;
        height: 100%;
        width: 100px;
        left: 0;
        color: #757575;
        font-size: 16px;
        text-align: center;
        margin-top: 14px;
        &:before{
            content: "";
            display: block;
            position: relative;
            margin: 0 auto;
            height: 36px;
            width: 36px;
            background-position: 50%;
            background-repeat: no-repeat;
         
        }
`
export const MaskItem=styled.div`
    display: block;
    position: relative;
    height: 46px;
    line-height: 46px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #e1e1e1;
    float: left;
    width: 50%;
    border-top: 0;
    /* &:nth-of-type(2n+1){
        border-left:0;
    }
    &:last-of-type{
        border-bottom:0;
    } */
    
    ${(props)=>(props.isactive ?  "border:1px solid #000" :"" )}
    ${(props)=>(props.isactive ?  "color:#000" :"" )} ;

`
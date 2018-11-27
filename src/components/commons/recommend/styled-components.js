import styled from 'styled-components';

export const CommonSection = styled.section`
    display: block;
    position: relative;
    width: 100%;
    
    padding-bottom: 16px;
    margin: 10px auto;
    
    border-left: none;
    border-right: none;
`;


export const HeaderWrapper = styled.header`
    height: 40px;
    line-height: 40px;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 14px;
    align-content: stretch;
    .header-link{
        font-size: 14px;
        color: #9e9e9e;

        a{
            display: inline-block;
            max-width: 66px;
            text-align: center;
            font-size: 13px;
            color: #9e9e9e;
            
        }

        ::after{
            background-size: 365px 339px;
            background-position: -347px -181px;
            content: "";
            height: 16px;
            width: 16px;
            display: inline-block;
            position: relative;
            top: 3px;
            right: -3px;
            background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons@2x.02953e71.png);

        }
    }
`;

export const HeaderTitle = styled.div`
    width: 100px;
    /* text-align: center; */
    font-size: 16px;
    color: #000;
    i{
        background-size: 86px 86px;
        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-catalog@2x.1144a958.png);
        position: relative;
        display: inline-block;
        top: 4px;
        margin-right: 5px;
        height: 20px;
        width: 20px;
        
    }
    &.sound{
        i{
            background-position: -22px 0;
        }
    }
`;

export const HeaderNav = styled.div`
    font-size: 14px;
    color: #9e9e9e;

    a{
        display: inline-block;
        max-width: 66px;
        text-align: center;
        font-size: 13px;
        color: #9e9e9e;
        
    }

    ::after{
        background-size: 365px 339px;
        background-position: -347px -181px;
        content: "";
        height: 16px;
        width: 16px;
        display: inline-block;
        position: relative;
        top: 3px;
        right: -3px;
        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons@2x.02953e71.png);

    }
`;


export const BodyWrapper = styled.div`
    min-height: 170px;   
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 14px;
    &.channel{
        flex-wrap: wrap;
    }
   
`;

export const BodyItem = styled.div`


    &.channel{

    }
    width: 106px;
    height: 163px;
    margin: 5px;
    padding: 0;

    a{
        display: block;
        -webkit-appearance: none;
        .cover{
            width: 106px;
            height: 106px;
            display: block;
            overflow: hidden;
            position: relative;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;

            &::before {
                background-size: 56px 55px;
                background-position: 0 0;
                content: "";
                display: block;
                position: absolute;
                right: 8px;
                bottom: 8px;
                height: 24px;
                width: 24px;
                background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);



            }
        }
        .title {
            width: 100%;
            height: 36px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 18px;
            margin: 4px 0;
            color: #616161;
            font-size: 13px;
        }

        .detail {
            display: flex;
            justify-content : space-between;
            .item{
                position: relative;
                padding-left: 14px;
                font-size: 11px;
                line-height: 11px;
                    color: #bdbdbd;
                &::before{
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    height: 10px;
                    width: 12px;
                }
                
            }

            .play-times::before {
                background-size: 56px 55px;
                background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
                background-color: white;
                background-position: -44px -14px;
            }

            .comments::before {
                background-size: 56px 55px;
                background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
                background-color: white;
                background-position: -44px -26px;

            
            }
        }


    }

`;

export const BodyItemChannel = styled.div`


    
    width: 160px;
    height: 150px;
    margin: 3px;
    padding: 0;
    

    a{
        display: block;
        -webkit-appearance: none;
        .cover{
            width: 100%;
            height: 106px;
            display: block;
            overflow: hidden;
            position: relative;
            border-radius: 4px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;
            
            .follow{
                position: absolute;
                top: 0;
                right: 0;
                background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
                width: 80px;
                height: 20px;
                padding: 0 5px;
                text-align: right;
                border-top-right-radius: 4px;
                .right{
                    float: right;
                    display: inline-block;
                    position: relative;
                    height: 20px;
                    line-height: 20px;
                    padding-left: 18px;
                    color: #fff;
                    font-size: 12px;
                    text-shadow: 0 1px 1px rgba(0,0,0,.7);
                }
                span{
                    float: right;
                    display: inline-block;
                    position: relative;
                    height: 20px;
                    line-height: 20px;
                    padding-left: 18px;
                    color: #fff;
                    font-size: 12px;
                    text-shadow: 0 1px 1px rgba(0,0,0,.7);
                    &::before{
                        background-size: 56px 55px;
                        background-position: -18px -26px;
                        content: "";
                        position: absolute;
                        top: 4px;
                        left: 0;
                        width: 15px;
                        height: 13px;
                        box-sizing: border-box;
                        background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);
                    }
                }
                
            }
            
        }
        .title {
            margin-top: 3px;
            width: 100%;
            height: 40px;
            word-break: break-all;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -moz-box;
            -moz-box-orient: vertical;
            -moz-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            box-orient: vertical;
            line-clamp: 2;
            line-height: 20px;
            color: #616161;
            font-size: 13px;

        }


    }

`;

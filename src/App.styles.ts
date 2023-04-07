import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
// import BgImages from './video/vidone.mp4';
import BgImages from './Img/doll.jpg';

export const MyStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background-image: url(${BgImages});
    background-size cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Genos', sans-serif;
}

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: white;
}

.score{
    color: White;
    font-size: 4rem;
    margin: 0;
}

h1{
    font-family: inline, 'Special Elite', cursive;
    background-image: linear-gradient(180deg,
#603813,
#b29f94);
    background-size: 100%;
    background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;

    text-fill-color: transparent;
    filter: drop-shadow(2px 2px black);
    font-size: 54px;
    text-align: center;
    margin: 20px
}

.start, .next {
    cursor: pointer;
    color: white;
font-size:1.8rem;
    background: linear-gradient(180deg,
#603813,
#b29f94);
    border: 2px solid white;
    box-shadow 0px 10px 5px black;
    border-radius:10px;
    height:40px;
    margin: 20px 0;
    padding:0px 40px;

}

.start{
    max-width:200px;
}


`;

import styled from 'styled-components';

export const Wrapper = styled.div`
max-width:1100px;
background: linear-gradient(
#603813,
#b29f94);
border-radius: 10px;
border: 2px solid white;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.85);
text-align: center;

p{
    font-size: 1.6rem;
    color: white;
}
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`

transition: all .3s ease-in-out;

:hover{
    opacity: .6;
}

button {
    cursor: pointer;
    user-select: none;
    font-size: 1.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
       ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
       : !correct && userClicked
       ? 'linear-gradient(90deg, #ff5656, #c16868)'
       : 'linear-gradient(90deg, #56ccff, #6eafb4)'}



    border: 3px solid white;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);

}

`;

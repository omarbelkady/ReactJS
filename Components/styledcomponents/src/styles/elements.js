import styled, { css } from 'styled-components';

import { colors } from './global';

export const Buttons = styled.a`
height: 48px;
line-height: 48px;
padding: 0 64px;
font-weight: 600px;
border-radius: 100px;
color: ${colors.black};
background: ${colors.white};
cursor: pointer;
margin: 0 30px;
font-size: 14px;
text-decoration: none;

${props => 
  props.outline && 
  css`
      background: transparent;
      border: 1px solid ${colors.black}
  `}


${props => 
  props.primary && 
  css`
      background: ${colors.primary};
  `}
  
${props => 
  props.secondary && 
  css`
      background: transparent;
      border: 1px solid ${colors.secondary}
  `}
`;

export //Creating my button
//I want to be able to pass props to differentiate between my primary and secondary buttons I have

const TheSearchBar = styled.div`
height: 48px;
width: 400px;
position: relative;
margin: 0 24px;
padding: 10px;

input{
  height: 48px;
  width: 800px
  padding: 0 64px;
  border-radius: 12px px;
  border: none;
  font-size: 14px;
  outline: none;
  color: ${colors.black};
  &::placeholder {
    color: colors.grey;
  }
}

img {
  position: absolute;
  top: 40%;
  left: 80px;
  transform: translateY(-50%) translateX(190%)
  z-index: 15;
  padding: 1px 30px;
  width: 25px;
  height: 20px;

}
`;

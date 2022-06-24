import styled from 'styled-components';
<<<<<<< HEAD
import { BaseButton, InvertedButton, GoogleSignInButton } from '../button/button.styles';
=======

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';
>>>>>>> lesson-34

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
<<<<<<< HEAD
  ${InvertedButton},
  ${GoogleSignInButton} {
    margin-top: auto;
  }
`
=======
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;
>>>>>>> lesson-34

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
<<<<<<< HEAD
`
=======
`;
>>>>>>> lesson-34

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
<<<<<<< HEAD
`
=======
`;
>>>>>>> lesson-34

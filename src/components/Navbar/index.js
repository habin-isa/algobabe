import React from 'react';
import * as S from './styles';

export const NAVBAR_HEIGHT = '60px';

const NavBar = ({ children }) => {
  return <S.Bar>{children}</S.Bar>;
};

export default NavBar;

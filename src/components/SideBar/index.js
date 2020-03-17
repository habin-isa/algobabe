import React from 'react';
import * as S from './styles';
import github from './assets/github.png';

const SideBar = () => {
  return (
    <S.Wrapper>
      <a href="https://github.com/habin-isa/algobabe.git">
        <S.GithubImg src={github} alt="github-img" />
      </a>
    </S.Wrapper>
  );
};

export default SideBar;

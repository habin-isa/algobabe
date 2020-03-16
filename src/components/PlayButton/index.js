import React from 'react';
import * as S from './styles';

export default ({ playing, onClick }) => <S.Button onClick={onClick}>{playing ? 'Stop' : 'Play'}</S.Button>;

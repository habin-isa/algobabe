import React from 'react';
import Sequencer from '../Sequencer';
import PlayerProvider from '../PlayerProvider';
import * as S from './styles';
import SideBar from '../SideBar';
// import { string } from 'prop-types';

const App = () => {
  return (
    <S.Wrapper>
      <SideBar />
      <S.ContentContainer>
        <S.TitleContainer>
          <S.Title>Algobabe</S.Title>
          <S.Subtitle>16 Step sequencer to make your 808 dreams reality</S.Subtitle>
          <S.Subtitle>Click squares to activate sounds at each step</S.Subtitle>
          <S.Subtitle>Play/Stop the sequencer</S.Subtitle>
        </S.TitleContainer>
        <S.PlayerContainer>
          <PlayerProvider>
            {({ player }) => {
              if (!player) {
                return <p>loading....</p>;
              }
              return <Sequencer player={player} />;
            }}
          </PlayerProvider>
        </S.PlayerContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default App;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultTypes = {
//   propName: 'Kimmy'
// };

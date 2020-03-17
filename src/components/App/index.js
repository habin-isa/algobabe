import React from 'react';
import Sequencer from '../Sequencer';
import PlayerProvider from '../PlayerProvider';
import * as S from './styles';
// import { string } from 'prop-types';

const App = () => {
  return (
    <S.Wrapper>
      <h1>Algobabe</h1>
      <PlayerProvider>
        {/* {({ player }) => {
          return <Sequencer player={player} />;
        }} */}

        {({ player }) => {
          if (!player) {
            return <p>loading....</p>;
          }
          return <Sequencer player={player} />;
        }}
      </PlayerProvider>
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

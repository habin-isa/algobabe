import React, { useState, useEffect } from 'react';
import Tone from 'tone';
import kick from '../../sounds/kick.wav';
import clap from '../../sounds/clap.wav';
import hhopen from '../../sounds/hhopen.wav';
import hhclosed from '../../sounds/hhclosed.wav';

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: kick,
        CP: clap,
        OH: hhopen,
        CH: hhclosed
      },
      () => {
        console.log('buffers loaded');
        setPlayer(player);
      }
    ).toMaster();
  }, []);

  return children({ player });
};

export default PlayerProvider;

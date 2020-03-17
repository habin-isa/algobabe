import React, { useState, useEffect } from 'react';
import Tone from 'tone';
import kick from '../../sounds/kick.wav';
import clap from '../../sounds/clap.wav';
import hhopen from '../../sounds/hhopen.wav';
import hhclosed from '../../sounds/hhclosed.wav';
import bass from '../../sounds/bass.wav';
import breath from '../../sounds/breath.wav';
import kick2 from '../../sounds/kick2.wav';
import triangle from '../../sounds/triangle.wav';

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: kick,
        CP: clap,
        OH: hhopen,
        CH: hhclosed,
        BS: bass,
        BH: breath,
        BK: kick2,
        TT: triangle
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

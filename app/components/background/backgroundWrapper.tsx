'use client';
import { useState } from 'react';
import { BackSvg } from './BackSvg';
import RainAnimation from '../rain_background/rainAnimation';
import CustomAudioPlayer from '../custom_audio_player/customAudioPlayer';

const BackgroundWrapper = () => {
  const [highlighted, setHighlighted] = useState('');

  return (
    <div className=' z-0 relative h-[100vh] overflow-hidden '>
      <RainAnimation />
      <BackSvg highlighted={highlighted} setHighlighted={setHighlighted} />
      <CustomAudioPlayer />
    </div>
  );
};

export default BackgroundWrapper;

'use client';
import { useState } from 'react';
import { BackSvg } from './BackSvg';
import RainAnimation from '../rain_background/rainAnimation';
import CustomAudioPlayer from '../custom_audio_player/customAudioPlayer';
import useMediaQuery from '@/app/utils/hooks/use-mediaQuery';

const BackgroundWrapper = () => {
  const [highlighted, setHighlighted] = useState('');
  const isNotMobile = useMediaQuery('(min-width: 815px)');

  return (
    <div className=' z-0 relative h-[100vh] overflow-hidden '>
      <RainAnimation />
      <BackSvg
        highlighted={highlighted}
        setHighlighted={setHighlighted}
        mediaQuery={isNotMobile}
      />

      <CustomAudioPlayer />
    </div>
  );
};

export default BackgroundWrapper;

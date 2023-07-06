

import Controls from "./controls";
import { useRef  } from 'react';
const CustomAudioPlayer = () => {
    const audioRef = useRef(null);
    return (
      <div className='z-50 absolute w-72 h-72 sm:-bottom-32 -bottom-24 left-3 right-0  flex items-center self-end text-white '>
      <div className="audio-player w-full h-full z-50 absolute">
        <div className="inner">
        <audio src={'/Rain.mp3'} ref={audioRef} loop/>
      <Controls {...{ audioRef }} />
    </div>
      </div>
      </div>
    );
  };
  export default CustomAudioPlayer;
'use client';

import { useEffect, useState } from 'react';

import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5';
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from 'react-icons/io';

const Controls = ({ audioRef }: { audioRef: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(3);
  const [muteVolume, setMuteVolume] = useState(false);
  const [focused, setFocused] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);
  return (
    <div
      className=' opacity-60 hover:opacity-100 hover:backdrop-brightness-75 transition-all duration-1000 text-lg focus:opacity-100  '
      tabIndex={0}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label='Audio Controls'
    >
      <div className='group  '>
        <div className='flex-col '>
          <div
            className={` ${
              focused ? 'scale-100 transition-all duration-500 delay-100' : ''
            } font-orbitron text-lime-300 group-hover:scale-100 scale-0 transition-all duration-500 delay-500`}
          >
            Play Ambiance
          </div>
          <div className='flex gap-2'>
            <button
              tabIndex={0}
              aria-label='Play/Pause'
              className={`${isPlaying ? 'border-lime-600' : ''} ${
                focused ? 'scale-100 transition-all duration-500 delay-100' : ''
              } hover:border-lime-600 rounded-3xl border  border-slate-500/70 w-14 h-14 items-center flex justify-center bg-gradient-to-t from-fuchsia-900 via-purple-800 to-indigo-900  `}
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <IoPauseSharp
                  size={30}
                  className={`${isPlaying ? 'fill-lime-500' : ''} `}
                />
              ) : (
                <IoPlaySharp size={30} className='fill-slate-400 ' />
              )}
            </button>

            <button
              aria-label='Mute/Unmute'
              tabIndex={0}
              onClick={() => setMuteVolume((prev) => !prev)}
              className={`${muteVolume ? 'border-lime-600' : ''} ${
                focused ? 'scale-100 transition-all duration-500 delay-100' : ''
              } hover:border-lime-600 rounded-3xl border border-slate-500/70 w-14 h-14 items-center flex justify-center bg-gradient-to-t from-fuchsia-900 via-purple-800 to-indigo-900  `}
            >
              {muteVolume || volume < 1 ? (
                <IoMdVolumeOff
                  size={30}
                  className={`${
                    muteVolume ? 'fill-lime-500' : 'fill-slate-400'
                  }`}
                />
              ) : volume < 40 ? (
                <IoMdVolumeLow
                  size={30}
                  className={`${isPlaying ? '' : 'fill-slate-400'}`}
                />
              ) : (
                <IoMdVolumeHigh size={30} />
              )}
            </button>
          </div>
          <div
            className={` ${
              focused ? 'scale-100 transition-all duration-500 delay-100' : ''
            } font-orbitron text-lime-300 group-hover:scale-100 scale-0 transition-all duration-500 delay-500`}
          >
            Volume Controls
          </div>
        </div>
        <div className={'  flex gap-2'}>
          <input
            aria-label='Volume Slider'
            className={`${
              volume < 40
                ? 'accent-fuchsia-500'
                : volume < 60
                ? 'accent-red-400'
                : 'accent-yellow-500'
            }  cursor-pointer`}
            type='range'
            tabIndex={0}
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.valueAsNumber)}
          />
          <div
            aria-label='Volume amount'
            className={` ${
              focused ? 'scale-100 transition-all duration-500 delay-100' : ''
            } font-orbitron text-lime-300 group-hover:scale-100 scale-0 transition-all duration-500 delay-500`}
          >
            {volume}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;

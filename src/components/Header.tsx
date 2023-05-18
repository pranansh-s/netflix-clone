import { useRef, useState } from 'react';

const header = require('../assets/header.webp');
const headerVideo = require('../assets/headerVideo.mp4');
const headerLogo = require('../assets/headerLogo.png');

const playLogo = require('../assets/iplay.png');
const infoLogo = require('../assets/iinfo.png');
const redoLogo = require('../assets/iredo.png');
const muteLogo = require('../assets/imute.png');
const unmuteLogo = require('../assets/iunmute.png');


const Header = () => {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(true); //He just like me :(
  const [mute, setMute] = useState<boolean>(false);

  return (
    <div className="h-screen relative font-NetflixMedium select-none text-white">
        <video className={`w-screen h-screen z-20 absolute object-fill transition-all duration-300 ${!playing && 'opacity-0'}`} ref={videoPlayer} onLoadedData={() => videoPlayer.current?.play()} onEnded={() => setPlaying(false)} muted>
          <source src={headerVideo} type="video/mp4"/>
        </video>
        <img className="w-screen h-screen z-10 absolute" src={header} alt="" />
        <div className="px-14 flex flex-col items-start absolute top-1/2 -translate-y-1/2 z-30">
          <img className={`w-[30%] my-10 origin-bottom-left ${!playing ? 'animate-scaleUp' : 'animate-scaleDown'}`} src={headerLogo} alt="" />
          <p className={`w-[45%] -mb-36 opacity-0 font-Netflix text-lg -z-10 ${!playing ? 'animate-textUp' : 'animate-textDown'}`}>Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room soon becomes a global social network and a revolution in communication.</p>          
          <div className='flex my-10 space-x-4'>
            <button className="w-40 h-12 rounded-md px-9 py-7 justify-between text-xl flex items-center text-black hover:bg-[#9d9d9e] bg-white transition-all duration-200">
                <img className="h-8" src={playLogo}/>
                <span>Play</span>
            </button>
            <button className="w-48 h-12 rounded-md px-7 py-7 justify-between text-xl flex items-center font-Netflix hover:bg-[#66645E]/50 bg-[#6d6d6e]/70 transition-all duration-200">
            <img className="h-8" src={infoLogo}/>
                <span>More Info</span>
            </button>
          </div>
        </div>
        <div className='absolute right-0 top-2/3 -translate-y-2/3 z-30 flex space-x-5'>
          {playing ? 
          <button onClick={() => { videoPlayer.current!.muted = !videoPlayer.current?.muted; setMute(!mute); }} className='rounded-full border-[0.065rem] border-white w-11 h-11 justify-center items-center flex backdrop-blur-xl hover:bg-gray-300 hover:bg-opacity-20'>
            <img className="h-5" src={!mute ? muteLogo : unmuteLogo}/>
          </button> : 
          <button onClick={() => { videoPlayer.current?.pause(); videoPlayer.current!.currentTime = 0; videoPlayer.current?.play(); setPlaying(true); }} className='rounded-full border-[0.065rem] border-white w-11 h-11 justify-center items-center flex backdrop-blur-xl hover:bg-gray-300 hover:bg-opacity-20'>
            <img className="h-5" src={redoLogo}/>
          </button>}
          <span className='backdrop-blur-xl bg-gray-300 bg-opacity-10 pl-4 pr-10 py-2 border-l-2 border-white'>U/A</span>
        </div>
    </div>
  )
}

export default Header
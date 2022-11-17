import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Test = require('../assets/test.jpeg');

const Header = () => {
  return (
    <div className="h-screen relative font-NetflixMedium">
        <img className="h-full absolute -z-10" src={Test} alt="" />
        <div className="px-14 flex space-x-2 top-2/3 absolute items-center">
            <button className="w-28 h-11 rounded-md px-6 py-3 justify-between flex items-center hover:bg-[#9d9d9e] bg-white transition-all duration-200">
                <FontAwesomeIcon className="h-5" icon={faPlay}/>
                <span>Play</span>
            </button>
            <button className="w-40 h-11 rounded-md px-6 py-3 justify-between flex items-center hover:bg-[#66645E]/50 bg-[#6d6d6e]/70 transition-all duration-200">
                <FontAwesomeIcon className="h-7 text-white" icon={faInfoCircle}/>
                <span className="text-white">More Info</span>
            </button>
        </div>
    </div>
  )
}

export default Header
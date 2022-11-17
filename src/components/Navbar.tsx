import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Logo = require('../assets/logo.png');

function Navbar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [navSelected, setNavSelected] = useState<Number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [top, setTop] = useState<boolean>(true);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY === 0) setTop(true);
      else setTop(false);
    }
  }, []);

  const clear = () => {
    searchRef.current!.value = '';
    setSearchTerm('');
  }

  return (
    <div className={`h-[4.25rem] w-screen z-30 fixed flex justify-between items-center py-5 px-14 text-sm text-secondary font-NetflixLight transition-all duration-500 ease-out ${top ? 'bg-gradient-to-b from-primary to-transparent' : 'bg-black'}`}>
        <div className="flex">
            <img src={Logo} className='h-[1.9rem]' alt="logo"/>
            <ul className="flex list-none items-center space-x-5 mx-10 text-sm">
              {
                ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages']
                .map((name, index) => (
                  <li key={index} onClick={() => setNavSelected(index)} className={`cursor-pointer transition-all duration-300 ${navSelected === index ? 'text-white font-NetflixMedium' : 'hover:text-dark font-Netflix'}`}>{name}</li>
                ))
              }
            </ul>
        </div>
        <div className="flex space-x-5 items-center text-sm">
          <div className={`flex items-center ${search ? 'bg-primary/70 outline-white outline' : 'bg-transparent'}  px-2 py-1 space-x-3`}>
            <FontAwesomeIcon className="h-4 -rotate-12 cursor-pointer pr-3" onClick={() => !searchTerm && searchRef.current?.focus()} icon={faMagnifyingGlass}/>
            <input ref={searchRef} onFocus={() => setSearch(true)} onBlur={() => setSearch(false)} onChange={() => setSearchTerm(searchRef.current!.value)} className={`${search ? 'w-48 placeholder:text-dark/80' : 'w-0 placeholder:text-dark/0'} h-5 bg-transparent outline-none transition-all duration-300 scale-110`} placeholder='Titles, people, genres' type="text" />
            <FontAwesomeIcon className={`h-4 cursor-pointer ${searchTerm === '' ? 'hidden' : 'block'}`} onClick={clear} icon={faXmark} />
          </div>
          <div className="cursor-pointer">KIDS</div>
          <div className="cursor-pointer">DVD</div>
          <FontAwesomeIcon className="h-4 cursor-pointer" icon={faBell}/>
          <menu className="w-8">

          </menu>
        </div>
    </div>
  )
}

export default Navbar
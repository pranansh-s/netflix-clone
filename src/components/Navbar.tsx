import { useEffect, useRef, useState } from "react";

const searchLogo = require('../assets/isearch.png');
const bellLogo = require('../assets/ibell.png');
const profileLogo = require('../assets/iprofile.png');
const caretLogo = require('../assets/icaret.png');
const childrenLogo = require('../assets/ichildren.png');
const pencilLogo = require('../assets/ipencil.png');
const transferLogo = require('../assets/itransfer.png');
const accountLogo = require('../assets/iaccount.png');
const helpLogo = require('../assets/ihelp.png');
const Logo = require('../assets/logo.png');

function Navbar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [navSelected, setNavSelected] = useState<Number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [top, setTop] = useState<boolean>(true);
  const [search, setSearch] = useState<boolean>(false);

  const [accountMenu, setAccountMenu] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const mouseLeaveHandler = () => {
    timeoutRef.current = setTimeout(() => {
      setAccountMenu(false);
    }, 300);
  }

  const mouseEnterHandler = () => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current);
    setAccountMenu(true);
  };

  return (
    <div className={`h-[4.25rem] w-screen z-50 fixed flex justify-between items-center py-5 px-14 text-sm text-secondary font-NetflixLight transition-all duration-500 ease-out ${top ? 'bg-gradient-to-b from-primary to-transparent' : 'bg-black'}`}>
        <div className="flex">
            <img src={Logo} className='h-[1.9rem] cursor-pointer' alt="logo" onClick={() => window.scrollTo(0, 0)}/>
            <ul className="flex list-none items-center space-x-5 mx-10 text-sm">
              {
                ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages']
                .map((name, index) => (
                  <li key={index} onClick={() => setNavSelected(index)} className={`cursor-pointer transition-all duration-300 ${navSelected === index ? 'text-white font-NetflixMedium' : 'hover:text-dark font-NetflixLight'}`}>{name}</li>
                ))
              }
            </ul>
        </div>
        <div className="flex space-x-5 items-center text-sm relative font-Netflix">
          <div className={`flex items-center ${search ? 'bg-primary/70 outline-white outline w-56' : 'bg-transparent w-10'} outline-1 px-2 py-1 space-x-3 absolute right-[12rem] transition-all duration-300`}>
            <img className={`h-6 cursor-pointer ${search ? 'scale-110' : 'scale-100'}`} onClick={() => !searchTerm && searchRef.current?.focus()} src={searchLogo}/>
            <input ref={searchRef} onFocus={() => setSearch(true)} onBlur={() => { clear(); setSearch(false)} } onChange={() => setSearchTerm(searchRef.current!.value)} className={`${search ? 'w-36 placeholder:text-dark/80' : 'w-0 placeholder:text-dark/0'} h-5 p-2 bg-transparent outline-none text-xs transition-all duration-300`} placeholder='Titles, people, genres' type="text" />
            <span role="button" className={`h-5 clear cursor-pointer ${searchTerm === '' ? 'opacity-0' : 'opacity-100'}`} onClick={clear} />
          </div>
          <div className="cursor-pointer hover:text-dark transition-all duration-300">Children</div>
          <img src={bellLogo} alt="" className="h-6 cursor-pointer" />
          <menu className="w-full group relative" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <div className="flex items-center cursor-pointer space-x-2">
                <img src={profileLogo} alt="" className="rounded-sm" />
                <img src={caretLogo} alt="" className={`h-3 ${accountMenu ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
              </div>
              <div className={`${accountMenu ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'} font-Netflix text-[0.8rem] flex flex-col items-center outline outline-[1px] px-4 outline-gray-800 w-56 h-60 top-14 origin-top absolute right-full translate-x-14 transition-all duration-300 bg-black`}>
                <img src={caretLogo} alt="" className="h-[1.1rem] absolute rotate-180 right-8 -top-[0.85rem]" />
                <li className="hover:underline w-full cursor-pointer flex items-center my-4 -ml-2"><img src={childrenLogo} alt="" className="h-8 rounded-sm mr-3" />Children</li>
                <menu className="w-full space-y-2 mb-3">
                  <li className="hover:underline cursor-pointer flex items-center"><img src={pencilLogo} alt="" className="h-6 mr-3" />Manage Profiles</li>
                  <li className="hover:underline cursor-pointer flex items-center"><img src={transferLogo} alt="" className="h-6 mr-3" />Transfer Profile</li>
                  <li className="hover:underline cursor-pointer flex items-center"><img src={accountLogo} alt="" className="h-6 mr-3" />Account</li>
                  <li className="hover:underline cursor-pointer flex items-center"><img src={helpLogo} alt="" className="h-6 mr-3" />Help Centre</li>
                </menu>
                <div className="h-14 w-[calc(100%+2rem)] text-center flex items-center border-t-[1px] border-gray-800">
                  <span className="w-full hover:underline cursor-pointer">Sign out of Netflix</span>
                </div>
              </div>
          </menu>
        </div>
    </div>
  )
}

export default Navbar
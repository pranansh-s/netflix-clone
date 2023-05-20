import { useRef, useState } from "react";

const Card = (props: { item: any }) => {
  const hoverRef = useRef<NodeJS.Timeout | null>(null);
  const [hov, setHov] = useState<boolean>(false);
  return (
    <div className={`mx-1 overflow-hidden group/card transition-all duration-300 origin-bottom hover:z-50 relative ${hov ? 'scale-[1.4] rounded-lg shadow-2xl' : 'scale-100 rounded-sm shadow-none'}`} onMouseEnter={() => hoverRef.current = setTimeout(() => setHov(true), 700)} onMouseLeave={() => { hoverRef.current && clearTimeout(hoverRef.current); setHov(false); }}>
      <img src={`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`} alt="" className="h-max" />
      <div className={`h-24 bg-primary group-hover/card:block hidden ${hov ? 'opacity-100' : 'opacity-0'} transition-all duration-100`}>

      </div>
    </div> 
  )
}

export default Card;
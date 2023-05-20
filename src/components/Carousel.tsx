import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieSetAsync } from '../redux/features/movieSlice';
import { tvSetAsync } from '../redux/features/tvSlice';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { LazyLoadTypes } from 'react-slick'; 

import Card from './Card';

const chevronThick = require('../assets/ichevthick.png');
const chevronRight = require('../assets/ichevright.png');
const chevronLeft = require('../assets/ichevleft.png');

const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div className='absolute z-10 top-0 right-0 h-full w-[3.3rem] flex justify-center items-center bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60 hover:bg-opacity-80'>
      <img
        className="h-8 hover:scale-125 transition-all duration-200"
        style={{ ...style}}
        onClick={onClick}
        src={chevronRight}
      />
    </div>
  );
}

const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div className='absolute z-10 top-0 left-0 h-full w-[3.3rem] flex justify-center items-center bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60 hover:bg-opacity-80'>
      <img
        className="h-8 hover:scale-125 transition-all duration-200"
        style={{ ...style}}
        onClick={onClick}
        src={chevronLeft}
      />
    </div>
  );
}

const Carousel = (props: {title: string, get: string, type: string}) => {
  const lazy: LazyLoadTypes = "ondemand";
  const cards = useSelector((state: any) => state[props.type][props.get]);
  const dispatch = useDispatch();

  useEffect(() => {
    if(props.type === "movies") dispatch<any>(movieSetAsync(props.get));
    else dispatch<any>(tvSetAsync(props.get));
  }, [dispatch, props.get, props.type]);

  const settings = {
    dots: true,
    lazyLoading: lazy,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,    
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    appendDots: (dots: any) => (
      <div>
        <ul className='w-max right-28 absolute'>{dots}</ul>
      </div>
    ),
    customPaging: () => {
      return (
        <div className='h-[0.1rem] w-3 bg-white/30'></div>
      );
    },
  };

  return (
    <div className='text-white h-full group/carousel absolute z-30'>
      {cards && 
      <>
        <div className='flex items-center group/heading w-max'>
          <h3 className='font-Netflix text-2xl cursor-pointer my-3 pl-14'>{props.title}</h3>
          <div className='flex items-center cursor-pointer space-x-1 font-NetflixBold text-[#54b9c5] opacity-0 text-sm group-hover/carousel:opacity-100'>
            <h5 className='w-0 group-hover/heading:w-full group-hover/heading:pl-4 group-hover/heading:opacity-90 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-700'>Explore All</h5>
            <img src={chevronThick} className='h-4 translate-y-1/5 group-hover/heading:h-3' alt="" />
          </div>
        </div>
        <Slider {...settings} className="w-screen cursor-pointer group h-max px-14 group hover:overflow-y-visible overflow-y-hidden overflow-x-clip">
          {cards.map((item: any, index: number) => <Card key={index} item={item} />)}
        </Slider>
      </>}
    </div>
  )
}

export default Carousel;
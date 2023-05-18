import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieSetAsync } from '../redux/features/movieSlice';
import { tvSetAsync } from '../redux/features/tvSlice';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { LazyLoadTypes } from 'react-slick'; 

import Card from './Card';

const chevronRight = require('../assets/ichevright.png');
const chevronLeft = require('../assets/ichevleft.png');

const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div className='absolute z-10 top-0 right-0 h-full w-[3.3rem] flex justify-center items-center cursor-pointer bg-black bg-opacity-40 group-hover:bg-opacity-60'>
      <img
        className="h-10 group-hover:opacity-100 opacity-0"
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
    <div className='absolute z-10 top-0 left-0 h-full w-[3.3rem] flex justify-center items-center cursor-pointer bg-black bg-opacity-40 group-hover:bg-opacity-60'>
      <img
        className="h-10 group-hover:opacity-100 opacity-0"
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
    <div className='text-white h-max'>
      {cards && 
      <>
        <h3 className='font-Netflix text-2xl my-3 px-14'>{props.title}</h3>
        <Slider {...settings} className="group w-screen h-max px-14 hover:overflow-y-visible overflow-y-hidden overflow-x-clip">
          {cards.map((item: any, index: number) => <Card key={index} item={item} />)}
        </Slider>
      </>}
    </div>
  )
}

export default Carousel;
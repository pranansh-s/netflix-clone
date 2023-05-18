const Card = (props: { item: any }) => {
  return (
    <div className="mx-1 rounded-sm overflow-hidden cursor-pointer hover:scale-110 transition-all duration-300">
        <img src={`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`} alt="" />
    </div> 
  )
}

export default Card;
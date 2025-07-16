const EventItem = ({info,id,name,image, onEventClick}) => {

    const handleSeeMoreCLick = (evt) => {
        evt.stopPropagation();
    onEventClick(id);
    }
return(

<div>
<img src={image} alt={name} height='200px' ></img>
<h4>{name}</h4>
<p>{info}</p>
<button onClick={handleSeeMoreCLick}>Ver mas</button>
</div>

);


};

export default EventItem;
import { useState } from 'react';
import EventItem from './components/Eventitem'
import eventsJSON from '../../data/events.json'


const Events = () => {
const [data] = useState(eventsJSON);
const {_embedded: {events}} = data;

const handleEventItemClick =(id) => {
    console.log('evento clickeado', id)
}

    return (
        <div>
            <h2>Eventos</h2>
            
  {events.map((eventItem) => ( <EventItem 
    key={`event-item-${eventItem.id}`}
    name={eventItem.name}
    info={eventItem.info}
    image={eventItem.images[0].url}
    onEventClick={handleEventItemClick}
    id={eventItem.id}
    />
))};
        </div>
    );

};

export default Events;
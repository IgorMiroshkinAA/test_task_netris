import {FC} from 'react'
import {IEvent} from "../../utils/types";
import {formatTimestamp} from "../../utils/formatTimestamp/formatTimestamp";

import './EventList.css'

interface EventListProps {
    pending: boolean;
    error: string | null;
    events: IEvent[];
    onEventClick: (timestamp: number) => void;
}

const EventList: FC<EventListProps> = ({pending, error, events, onEventClick}) => {
    const sortedEvents = [...events].sort((a, b) => a.timestamp - b.timestamp)

    return (
        <ul className='ul'>
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : sortedEvents.map((event, index) => (
                <li key={event.timestamp} onClick={() => onEventClick(event.timestamp)}>
                    {formatTimestamp(event.timestamp)}
                </li>
            ))}
        </ul>
    );
};

export default EventList;
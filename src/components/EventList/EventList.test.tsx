import {render, screen, fireEvent} from '@testing-library/react';
import EventList from './EventList';
import {IEvent} from "../../utils/types";
import {formatTimestamp} from "../../utils/formatTimestamp/formatTimestamp";

const mockEvents: IEvent[] = [
    {
        timestamp: 6.160356073346696,
        duration: 0.8361136523432808,
        zone: {
            left: 113.29959866169601,
            top: 195.3639952425215,
            width: 126.18979937751924,
            height: 46.23090211142281
        }
    }
];

test('renders loading state', () => {
    render(<EventList pending={true} error={null} events={[]} onEventClick={jest.fn()}/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders error state', () => {
    render(<EventList pending={false} error="Error" events={[]} onEventClick={jest.fn()}/>);
    expect(screen.getByText('Error')).toBeInTheDocument();
});

test('renders event list and handles click', () => {
    const handleEventClick = jest.fn();

    render(<EventList pending={false} error={null} events={mockEvents} onEventClick={handleEventClick}/>);

    mockEvents.forEach(event => {
        const formattedTimestamp = formatTimestamp(event.timestamp);
        expect(screen.getByText(formattedTimestamp)).toBeInTheDocument();
    });

    const firstEvent = screen.getByText(formatTimestamp(mockEvents[0].timestamp));
    fireEvent.click(firstEvent);
    expect(handleEventClick).toHaveBeenCalledWith(mockEvents[0].timestamp);
});

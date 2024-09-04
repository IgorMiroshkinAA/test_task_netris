import {render, screen, fireEvent} from '@testing-library/react';
import VideoPlayer from './VideoPlayer';
import {IEvent} from '../../utils/types';

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

test('renders video player', () => {
    render(<VideoPlayer currentTime={0} events={mockEvents}/>);

    const videoElement = screen.getByTestId('video-player');
    expect(videoElement).toBeInTheDocument();

    fireEvent.timeUpdate(videoElement, {target: {currentTime: 3.012}});
});

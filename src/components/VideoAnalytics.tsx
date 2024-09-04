import {useState, useRef, useEffect, FC} from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import EventList from './EventList/EventList';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import {fetchEventsRequest} from "../redux/actions";

const VideoAnalytics: FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const dispatch = useDispatch()
    const {pending, events, error} = useSelector((state: RootState) => state.events)

    useEffect(() => {
        dispatch(fetchEventsRequest());
    }, []);

    const handleEventClick = (timestamp: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = timestamp / 1000;
            setCurrentTime(timestamp);
        }
    };

    return (
        <div>
            <VideoPlayer
                refValue={videoRef}
                currentTime={currentTime}
                events={events}
            />
            <EventList
                pending={pending}
                error={error}
                events={events}
                onEventClick={handleEventClick}
            />
        </div>
    );
};

export default VideoAnalytics;
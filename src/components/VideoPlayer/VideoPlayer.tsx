import {useEffect, FC, useState} from 'react';
import {IEvent} from "../../utils/types";
interface VideoPlayerProps {
    refValue?: any;
    currentTime: number;
    events: IEvent[];
}

const VideoPlayer: FC<VideoPlayerProps> = ({ refValue, currentTime, events }) => {
    const [activeEvents, setActiveEvents] = useState<IEvent[]>([])

    useEffect(() => {
        if (refValue?.current) {
            refValue.current.currentTime = currentTime / 1000;
        }
    }, [currentTime, refValue]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (refValue.current) {
                const currentVideoTime = refValue.current.currentTime * 1000
                const newActiveEvents = events.filter(event =>
                    currentVideoTime >= event.timestamp &&
                    currentVideoTime <= event.timestamp + event.duration
                )
                setActiveEvents(newActiveEvents)
            }
        }, 100)

        return () => clearInterval(interval);
    }, [events, refValue])

    return (
        <div style={{ position: 'relative', width: '800px', height: '450px' }}>
            <video
                ref={refValue}
                data-testid="video-player"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width="800"
                height="450"
                controls
            />
            {activeEvents.map((event) => (
                <div
                    key={event.timestamp}
                    style={{
                        position: 'absolute',
                        top: event.zone.top,
                        left: event.zone.left,
                        width: event.zone.width,
                        height: event.zone.height,
                        border: '2px solid green',
                        display: currentTime >= event.timestamp ? 'block' : 'none',
                    }}
                />
            ))}
        </div>
    );
};

export default VideoPlayer;
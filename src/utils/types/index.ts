export interface IEvent {
    timestamp: number;
    duration: number;
    zone: { left: number; top: number; width: number; height: number };
}

export interface ITimer {
    duration: number;
    timeOver: () => void;
    key: number;
}
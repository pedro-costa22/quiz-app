//types
import { ITimer } from "../types/Timer";

//timer
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({duration, timeOver}: ITimer){
    return (
        <div className={`
            flex text-[2.5rem] m-5
        `}>
            <CountdownCircleTimer 
                duration={duration}
                size={120}
                isPlaying
                onComplete={timeOver}
                colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
                colorsTime={[duration, 3, 3, 0]}
            >
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>

        </div>
    )
    
}
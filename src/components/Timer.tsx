import React, { useEffect } from 'react';

import { FC } from "react";
import { useDispatch } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { startStopCrawler } from '../store/crawler/action';

export interface TimerProps {
    id: string;
    expiredAt: number;
    isPaused: boolean;
}

const Timer: FC<TimerProps> = ({id, expiredAt, isPaused}) => {

    const dispatch = useDispatch();     

    const time = expiredAt ? new Date(expiredAt  * 1000) : new Date();
    
    const {
        seconds,
        minutes,
        restart,
        pause
    } = useTimer({ expiryTimestamp: time, onExpire: () => expiredAt && dispatch(startStopCrawler(id)) });

    useEffect(() => {
        restart(time);
    }, [expiredAt, restart]);

    useEffect(() => {
        isPaused && pause()
    }, [isPaused, pause]);

    return (
        <div style={{fontSize: '18px'}}>
            {('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
        </div>
    )
};

export default Timer;
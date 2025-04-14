import React from 'react';
import { MyCounter as MyCounterComponent } from '@placid/react';

import './myCounter.css';

export interface MyCounterProps {
    /** What the counter should start at */
    startCount?: number;
}

/** Primary UI component for user interaction */
export const MyCounter = ({
    startCount,
}: MyCounterProps) => {
    console.log('startCount', startCount);
    return (
        <div className="storybook-my-counter">
            <MyCounterComponent startCount={startCount} />
        </div>
    );
};

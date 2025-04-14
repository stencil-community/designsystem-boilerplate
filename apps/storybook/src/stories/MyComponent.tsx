import React from 'react';
import { MyComponent as MyComponentComponent } from '@placid/react';

import './myComponent.css';

export interface MyComponentProps {
    /** The first name */
    first?: string;
    /** The last name */
    last?: string;
    /** The middle name */
    middle?: string;
}

/** Primary UI component for user interaction */
export const MyComponent = ({
    first,
    last,
    middle,
}: MyComponentProps) => {
    console.log('first', first);
    console.log('last', last);
    console.log('middle', middle);
    return (
        <div className="storybook-my-component">
            <MyComponentComponent first={first} last={last} middle={middle} />
        </div>
    );
};

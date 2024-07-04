"use client"

import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Numbers', 'Keywords', 'Clicks', 'Conversions'];


export const Dynamic_Text_Transaction = () => {
    const [index, setIndex] = React.useState(0);


    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <h2>
            <TextTransition
                springConfig={presets.default}
                // translateValue={'60%'}

            >&nbsp;{TEXTS[index % TEXTS.length]}.</TextTransition>
        </h2>

    )
}

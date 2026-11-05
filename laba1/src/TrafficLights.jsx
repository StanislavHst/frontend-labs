import { useState } from 'react';
import Light from './Light.jsx';
import StatsBar from './StatsBar.jsx';

export default function TrafficLights({ orientation: initialOrientation }) {
    const [currentSignal, setCurrentSignal] = useState('red');
    const [counts, setCounts] = useState({ red: 0, yellow: 0, green: 0 });
    const [orientation, setOrientation] = useState(initialOrientation);
    const totalClicks = counts.red + counts.yellow + counts.green;

    function selectSignal(color) {
        setCurrentSignal(color);
        setCounts(previous => ({ ...previous, [color]: previous[color] + 1 }));
    }

    function toggleOrientation() {
        setOrientation(previous => previous === 'vertical' ? 'horizontal' : 'vertical');
    }

    return (
        <main>
            <div className={`traffic-lights ${orientation}`}>
                {['red', 'yellow', 'green'].map(color => (
                    <Light
                        key={color}
                        color={color}
                        active={currentSignal === color}
                        onSelect={selectSignal}
                    />
                ))}
            </div>
            <StatsBar counts={counts} totalClicks={totalClicks} currentSignal={currentSignal} />
            <button type="button" onClick={toggleOrientation}>
                Орієнтація: {orientation === 'vertical' ? 'вертикальна' : 'горизонтальна'}
            </button>
        </main>
    );
}

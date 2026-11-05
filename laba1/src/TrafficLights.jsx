import Light from './Light.jsx';

export default function TrafficLights({ orientation }) {
    return (
        <div className={`traffic-lights ${orientation}`}>
            <Light color="red" />
            <Light color="yellow" />
            <Light color="green" />
        </div>
    );
}

import TrafficLights from './TrafficLights.jsx';

const orientations = Array.from({ length: 100 }, () =>
    Math.random() > 0.5 ? 'vertical' : 'horizontal'
);

export default function App() {
    return (
        <main className="lights">
            {orientations.map((orientation, index) => (
                <section key={index}>
                    <p>{orientation === 'vertical' ? 'Вертикальний' : 'Горизонтальний'}</p>
                    <TrafficLights orientation={orientation} />
                </section>
            ))}
        </main>
    );
}

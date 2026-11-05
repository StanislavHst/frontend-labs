export default function StatsBar({ counts, totalClicks, currentSignal }) {
    return (
        <section aria-label="Статистика">
            <p>Червоний: {counts.red} · Жовтий: {counts.yellow} · Зелений: {counts.green}</p>
            <p>Усього кліків: {totalClicks}</p>
            <p>Активний сигнал: {currentSignal}</p>
        </section>
    );
}

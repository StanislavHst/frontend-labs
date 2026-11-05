export default function Light({ color, active, onSelect }) {
    return (
        <button
            type="button"
            className={`light ${active ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            aria-label={color}
            aria-pressed={active}
            onClick={() => onSelect(color)}
        />
    );
}

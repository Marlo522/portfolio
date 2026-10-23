export function Brick({ label, dark = false, className = '' }: { label?: string; dark?: boolean; className?: string }) {
  return (
    <div className={'brick ' + (dark ? 'brick-dark ' : '') + className}>
      <div className="brick-studs" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <span key={i} />)}</div>
      {label && <span className="brick-label">{label}</span>}
    </div>
  )
}

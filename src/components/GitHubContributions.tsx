import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, RefreshCw } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { personal } from '@/data/personal'

type Day = { date: string; count: number; level: number }
type CalendarData = { days: Day[]; total: number }
const shades = ['var(--contribution-0)', 'var(--contribution-1)', 'var(--contribution-2)', 'var(--contribution-3)', 'var(--contribution-4)']
const username = personal.socials.github.split('/').filter(Boolean).at(-1) ?? 'Marlo522'
const endpoint = 'https://github-contributions-api.jogruber.de/v4/' + encodeURIComponent(username) + '?y=last'
const dateLabel = (date: string) => new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'))

function readCalendar(value: unknown): CalendarData {
  if (!value || typeof value !== 'object' || !('contributions' in value) || !Array.isArray(value.contributions) || !value.contributions.length || value.contributions.length > 400) throw new Error('Invalid contribution data')
  const days: Day[] = value.contributions.map((day: unknown) => {
    if (!day || typeof day !== 'object' || !('date' in day) || !('count' in day) || !('level' in day)) throw new Error('Invalid day')
    const { date, count, level } = day
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) ||
      typeof count !== 'number' || !Number.isInteger(count) || count < 0 ||
      typeof level !== 'number' || !Number.isInteger(level) || level < 0 || level > 4) throw new Error('Invalid day')
    return { date, count, level }
  }).sort((a, b) => a.date.localeCompare(b.date))
  return { days, total: days.reduce((sum, day) => sum + day.count, 0) }
}

function ContributionCalendar({ days, total }: CalendarData) {
  const first = new Date(days[0].date + 'T00:00:00Z')
  const firstWeekday = first.getUTCDay()
  const last = days[days.length - 1]
  const dayIndex = (date: string) => Math.round((Date.parse(date + 'T00:00:00Z') - first.getTime()) / 86400000) + firstWeekday
  const columns = Math.floor(dayIndex(last.date) / 7) + 1
  const [selected, setSelected] = useState<Day | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = scrollRef.current
    if (!element) return
    const showLatest = () => { element.scrollLeft = element.scrollWidth }
    showLatest()
    const observer = new ResizeObserver(showLatest)
    observer.observe(element)
    return () => observer.disconnect()
  }, [days])
  const months = days.filter((day, index) => day.date.endsWith('-01') || (index === 0 && first.getUTCDate() <= 10))
  return (
    <>
      <div className="contribution-summary"><strong>{total.toLocaleString()} contributions</strong><span>{dateLabel(days[0].date)} – {dateLabel(last.date)}</span></div>
      <div ref={scrollRef} className="contribution-scroll" tabIndex={0} role="region" aria-label="GitHub contribution calendar. Scroll horizontally to see all dates.">
        <svg className="contribution-calendar" width={columns * 16 + 40} height={142} viewBox={'0 0 ' + (columns * 16 + 40) + ' 142'} style={{ minWidth: columns * 16 + 40 }} role="img" aria-labelledby="calendar-title calendar-description">
          <title id="calendar-title">{username}'s GitHub contributions</title>
          <desc id="calendar-description">{total} contributions from {dateLabel(days[0].date)} through {dateLabel(last.date)}. Higher-contrast squares indicate more contributions.</desc>
          {months.map((day, index) => {
            const column = Math.floor(dayIndex(day.date) / 7)
            const previousColumn = index > 0 ? Math.floor(dayIndex(months[index - 1].date) / 7) : -5
            if (column - previousColumn < 3) return null
            return <text key={day.date} x={40 + column * 16} y={16}>{new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' }).format(new Date(day.date + 'T00:00:00Z'))}</text>
          })}
          {[{ name: 'Mon', row: 1 }, { name: 'Wed', row: 3 }, { name: 'Fri', row: 5 }].map(({ name, row }) => <text key={name} x={0} y={36 + row * 16}>{name}</text>)}
          {days.map((day) => {
            const index = dayIndex(day.date)
            return <rect key={day.date} x={40 + Math.floor(index / 7) * 16} y={25 + index % 7 * 16}
              width={12} height={12} fill={shades[day.level]} stroke={selected?.date === day.date ? 'var(--ink)' : 'var(--line)'}
              strokeWidth={selected?.date === day.date ? 2 : 0.5} data-date={day.date} data-count={day.count}
              onMouseEnter={() => setSelected(day)} onMouseLeave={() => setSelected(null)} onClick={() => setSelected(day)}>
              <title>{day.count} {day.count === 1 ? 'contribution' : 'contributions'} on {dateLabel(day.date)}</title>
            </rect>
          })}
        </svg>
      </div>
      <div className="contribution-footer"><p>{selected ? selected.count + ' contributions on ' + dateLabel(selected.date) : 'Each square represents one day.'}</p><div className="contribution-legend" aria-label="Shading indicates the number of contributions, from less to more."><span>Less</span>{shades.map((shade) => <i key={shade} style={{ backgroundColor: shade }} aria-hidden="true" />)}<span>More</span></div></div>
    </>
  )
}

export function GitHubContributions() {
  const [data, setData] = useState<CalendarData | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let active = true
    const timeout = window.setTimeout(() => controller.abort(), 12000)
    setStatus('loading')
    async function load() {
      try {
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error('Contribution request failed')
        const calendar = readCalendar(await response.json())
        if (active) { setData(calendar); setStatus('ready') }
      } catch {
        if (active) setStatus('error')
      } finally { window.clearTimeout(timeout) }
    }
    void load()
    return () => { active = false; window.clearTimeout(timeout); controller.abort() }
  }, [attempt])

  return (
    <section className="github-panel" aria-labelledby="github-heading">
      <div className="github-header"><div><SiGithub size={30} aria-hidden="true" /><div><h3 id="github-heading">On GitHub.</h3><p>@{username}</p></div></div><a className="text-link" href={personal.socials.github + '?tab=overview'} target="_blank" rel="noopener noreferrer">View profile<ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <div className="github-content" aria-busy={status === 'loading'}>
        {status === 'loading' && <p className="contribution-status" role="status">Loading GitHub contributions…</p>}
        {status === 'error' && <div className="contribution-status" role="status"><p>Contributions are unavailable right now. You can still view my activity on GitHub.</p><button type="button" className="text-link" onClick={() => setAttempt((value) => value + 1)}><RefreshCw size={16} />Try again</button></div>}
        {status === 'ready' && data && <ContributionCalendar {...data} />}
      </div>
    </section>
  )
}

import { promos } from '../data/content.js'

const icons = {
  gift: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z',
  heart:
    'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
  spa: 'M12 13c1.5-3 5-5 9-5-1 4-3.5 7-9 7m0-2c-1.5-3-5-5-9-5 1 4 3.5 7 9 7Zm0 0v9',
}

export default function PromoColumns() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <div className="grid gap-px overflow-hidden rounded-soft bg-line sm:grid-cols-3">
          {promos.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center bg-sage-soft/60 px-6 py-10 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-moss-deep">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icons[p.icon]} />
                </svg>
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mute">
                {p.label}
              </p>
              <h3 className="mt-2 max-w-[220px] text-xl text-ink">{p.title}</h3>
              <a
                href="#"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-moss-deep"
              >
                {p.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

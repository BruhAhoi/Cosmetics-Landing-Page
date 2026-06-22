import { useState } from 'react'
import { routineProducts } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Stars from './Stars.jsx'
import Reveal from './Reveal.jsx'

export default function Routine() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState(0) // index — bền khi đổi ngôn ngữ

  // active = 0 (Tất cả) → toàn bộ; còn lại lọc theo tag (chỉ số filter)
  const items =
    active === 0
      ? routineProducts
      : routineProducts.filter((p) => p.tags?.includes(active))

  return (
    <section id="routine" className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Trái: tiêu đề + bộ lọc */}
        <Reveal>
          <span className="eyebrow">{t.routine.eyebrow}</span>
          <h2 className="mt-4 max-w-xs text-4xl leading-tight text-ink sm:text-5xl">
            {t.routine.title}
          </h2>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {t.routine.filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  active === i
                    ? 'border-moss bg-moss text-cream'
                    : 'border-line text-ink/70 hover:border-moss hover:text-moss'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Phải: lưới sản phẩm hoặc empty state */}
        <div>
          {items.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2">
                {items.map((p, i) => (
                  <Reveal as="article" key={p.id} delay={i * 100} className="group">
                    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-soft bg-sage-soft">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-44 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium tracking-wide text-ink">{p.name}</h3>
                        <p className="mt-0.5 text-sm text-mute">
                          {lang === 'vi' ? p.priceVnd : p.priceUsd}
                        </p>
                      </div>
                      <Stars count={p.stars} rating={p.rating} />
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={150} className="mt-8">
                <a
                  href="#featured"
                  className="group inline-flex items-center gap-3 rounded-full border border-moss px-7 py-3 text-sm font-medium text-moss-deep transition-colors hover:bg-moss hover:text-cream"
                >
                  {t.routine.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Reveal>
            </>
          ) : (
            /* Empty state — danh mục chưa có sản phẩm */
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-soft/60 text-moss-deep">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                  <circle cx="18.5" cy="15.5" r="2.5" />
                  <path d="M20.27 17.27 22 19" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{t.routine.empty.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-mute">
                {t.routine.empty.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

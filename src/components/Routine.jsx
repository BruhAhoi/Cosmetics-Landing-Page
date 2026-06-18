import { useState } from 'react'
import { routineFilters, routineProducts } from '../data/content.js'
import Stars from './Stars.jsx'

export default function Routine() {
  const [active, setActive] = useState(routineFilters[0])

  return (
    <section id="routine" className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Trái: tiêu đề + bộ lọc */}
        <div>
          <span className="eyebrow">Tất cả sản phẩm</span>
          <h2 className="mt-4 max-w-xs text-4xl leading-tight text-ink sm:text-5xl">
            Quy trình chăm sóc da dịu nhẹ
          </h2>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {routineFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  active === f
                    ? 'border-moss bg-moss text-cream'
                    : 'border-line text-ink/70 hover:border-moss hover:text-moss'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Phải: lưới 2x2 sản phẩm */}
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {routineProducts.map((p) => (
              <article key={p.id} className="group">
                <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-soft bg-sage-soft/70">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-44 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-mute">{p.price}</p>
                  </div>
                  <Stars count={p.stars} rating={p.rating} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#featured"
              className="group inline-flex items-center gap-3 rounded-full border border-moss px-7 py-3 text-sm font-medium text-moss-deep transition-colors hover:bg-moss hover:text-cream"
            >
              Mua ngay
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

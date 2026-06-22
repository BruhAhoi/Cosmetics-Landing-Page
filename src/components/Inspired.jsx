import { inspiredImage } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

const icons = {
  organic:
    'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Zm0 0c0-7 4-9 7-10',
  fits: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76ZM9 12l2 2 4-4',
  easy: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01',
}

export default function Inspired() {
  const { t } = useLanguage()
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Trái: tiêu đề + ảnh bát bột xanh */}
        <Reveal>
          <h2 className="max-w-md text-4xl leading-tight text-ink sm:text-5xl">
            {t.inspired.title}
          </h2>
          {/* Nền cream để mix-blend-multiply có backdrop (Reveal tạo stacking context) */}
          <div className="mt-10 w-fit bg-cream">
            <img
              src={inspiredImage}
              alt="Natural ingredients"
              loading="lazy"
              className="h-64 w-auto object-contain mix-blend-multiply lg:h-80"
            />
          </div>
        </Reveal>

        {/* Phải: 3 đặc điểm trên nền sage */}
        <Reveal delay={120} className="rounded-soft bg-sage/60 p-8 sm:p-10">
          <ul className="divide-y divide-moss/15">
            {t.inspired.features.map((f) => (
              <li key={f.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-moss-deep">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icons[f.icon]} />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

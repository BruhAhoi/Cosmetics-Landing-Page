import { testimonialImage } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

export default function Testimonials() {
  const { t } = useLanguage()
  return (
    <section id="testimonials" className="py-12 lg:py-20">
      <Reveal className="container-x">
        <div className="grid items-center gap-10 rounded-soft bg-sage/40 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Ảnh sản phẩm */}
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-full bg-cream">
              <img
                src={testimonialImage}
                alt="HOLOCENA skincare"
                loading="lazy"
                className="h-64 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Trích dẫn */}
          <div>
            <span className="eyebrow">{t.testimonials.eyebrow}</span>
            <div className="mt-4 flex gap-1 text-2xl text-moss-deep">★★★★★</div>
            <blockquote className="mt-5 font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
              “{t.testimonials.quote}”
            </blockquote>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-mute">{t.testimonials.reviewer}</p>
              <div className="flex gap-2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-moss/40 text-moss-deep transition-colors hover:bg-moss hover:text-cream"
                  aria-label={t.testimonials.prev}
                >
                  ←
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-moss/40 text-moss-deep transition-colors hover:bg-moss hover:text-cream"
                  aria-label={t.testimonials.next}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

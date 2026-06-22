import { featuredProducts } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Stars from './Stars.jsx'
import Reveal from './Reveal.jsx'

export default function FeaturedProducts() {
  const { t, lang } = useLanguage()
  return (
    <section id="featured" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.featured.eyebrow}</span>
          <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            {t.featured.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {featuredProducts.map((p, i) => (
            <Reveal as="article" key={p.id} delay={i * 120} className="group text-center">
              <div
                className={`relative flex h-80 items-center justify-center overflow-hidden rounded-soft ${
                  p.featured ? 'bg-sage' : 'bg-cream-deep'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-64 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-base font-medium tracking-wide text-ink">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-mute">
                    {lang === 'vi' ? p.priceVnd : p.priceUsd}
                  </p>
                </div>
                <Stars count={p.stars} rating={p.rating} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

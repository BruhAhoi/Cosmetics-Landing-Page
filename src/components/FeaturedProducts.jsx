import { featuredProducts } from '../data/content.js'
import Stars from './Stars.jsx'

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Sản phẩm nổi bật</span>
          <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            Chăm sóc da mặt, thiên nhiên và đạt chứng nhận hữu cơ
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {featuredProducts.map((p) => (
            <article key={p.id} className="group text-center">
              <div
                className={`relative flex h-80 items-center justify-center overflow-hidden rounded-soft ${
                  p.featured ? 'bg-sage/60' : 'bg-cream-deep/60'
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
                  <h3 className="text-base font-medium tracking-wide text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-mute">{p.price}</p>
                </div>
                <Stars count={p.stars} rating={p.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { heroLeaves, heroProduct } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="hero" className="relative overflow-hidden bg-cream">
      {/* Panel xanh sage bên trái (đậm hơn để chữ trắng lấn sang đọc được) */}
      <div className="absolute left-0 top-0 hidden h-full w-1/2 bg-sage lg:block" />

      {/* Ảnh lá xanh thật bên phải */}
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src={heroLeaves}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/25" />
        {/* Dải sáng ở đỉnh để chữ navbar (LOGIN/CART) đọc được trên nền lá tối */}
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-cream to-transparent" />
      </div>

      <div className="container-x relative grid min-h-[92vh] items-center gap-8 pt-28 pb-16 lg:grid-cols-2 lg:pt-24 lg:pb-0">
        {/* Chai sản phẩm bên trái (render nền trắng → object-contain + blend) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute h-72 w-72 rounded-full bg-cream/25 blur-3xl" />
          <img
            src={heroProduct}
            alt="Velvety Glasswing"
            className="relative h-95 w-auto object-contain mix-blend-multiply lg:h-135"
            loading="eager"
          />
        </div>

        {/* Tiêu đề + CTA — dịch trái để lấn sang panel xanh */}
        <div className="animate-float-up relative z-10 text-center lg:-ml-24 lg:text-left">
          <h1 className="text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[5rem] lg:leading-[1.02] lg:text-cream">
            {t.hero.title}
          </h1>

          {/* Nút "Mua ngay" — hình chữ nhật, ngay dưới tiêu đề (dính khối lá) */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#featured"
              className="group inline-flex items-center gap-4 bg-cream px-12 py-5 text-sm font-medium text-ink transition-all hover:bg-moss hover:text-cream"
            >
              {t.hero.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { heroLeaves, heroProduct } from '../data/content.js'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream">
      {/* Panel xanh nhạt bên trái (chứa chai) */}
      <div className="absolute left-0 top-0 hidden h-full w-1/2 bg-linear-to-br from-cream-deep to-sage-soft lg:block" />

      {/* Ảnh lá xanh thật bên phải */}
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src={heroLeaves}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/35" />
        {/* Dải sáng ở đỉnh để chữ navbar (LOGIN/CART) đọc được trên nền lá tối */}
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-cream to-transparent" />
      </div>

      <div className="container-x relative grid min-h-[92vh] items-center gap-8 pt-28 pb-16 lg:grid-cols-2 lg:pt-24 lg:pb-0">
        {/* Chai sản phẩm bên trái (render nền trong suốt → object-contain) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute h-72 w-72 rounded-full bg-sage/40 blur-2xl" />
          <img
            src={heroProduct}
            alt="Velvety Glasswing"
            className="relative h-95 w-auto object-contain mix-blend-multiply lg:h-135"
            loading="eager"
          />
        </div>

        {/* Tiêu đề + CTA (đè lên panel lá) */}
        <div className="animate-float-up text-center lg:pl-6 lg:text-left">
          <h1 className="text-5xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl lg:text-cream">
            Để thiên nhiên chăm sóc cơ thể và tâm hồn bạn
          </h1>
          <div className="mt-9 flex justify-center lg:justify-start">
            <a
              href="#featured"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-ink shadow-md transition-all hover:bg-moss hover:text-cream"
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

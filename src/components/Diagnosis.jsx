import { diagnosisImage } from '../data/content.js'

export default function Diagnosis() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        {/* Trái: minh hoạ line-art (đã có sẵn vòng sage trong ảnh) */}
        <div className="flex justify-center">
          <img
            src={diagnosisImage}
            alt="Skin diagnosis illustration"
            loading="lazy"
            className="h-80 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Phải: nội dung dịch vụ */}
        <div>
          <span className="eyebrow">Trải nghiệm dịch vụ</span>
          <h2 className="mt-4 max-w-md text-4xl leading-tight text-ink sm:text-5xl">
            Chẩn đoán làn da trong 3 phút
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/70">
            Chào đón làn da rạng rỡ và khỏe mạnh hơn với liệu trình chăm sóc được
            cá nhân hóa, độc đáo như chính bạn.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-moss px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-moss-deep"
          >
            Bắt đầu chẩn đoán
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

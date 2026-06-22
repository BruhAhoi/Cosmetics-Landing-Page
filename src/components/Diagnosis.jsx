import { diagnosisImage } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

export default function Diagnosis() {
  const { t } = useLanguage()
  return (
    <section className="py-12 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        {/* Trái: minh hoạ line-art (đã có sẵn vòng sage trong ảnh) */}
        <Reveal className="flex justify-center">
          {/* Nền cream để mix-blend-multiply có backdrop (Reveal tạo stacking context) */}
          <div className="bg-cream">
            <img
              src={diagnosisImage}
              alt="Skin diagnosis illustration"
              loading="lazy"
              className="h-80 w-auto object-contain mix-blend-multiply"
            />
          </div>
        </Reveal>

        {/* Phải: nội dung dịch vụ */}
        <Reveal delay={120}>
          <span className="eyebrow">{t.diagnosis.eyebrow}</span>
          <h2 className="mt-4 max-w-md text-4xl leading-tight text-ink sm:text-5xl">
            {t.diagnosis.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/70">{t.diagnosis.desc}</p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-moss px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-moss-deep"
          >
            {t.diagnosis.cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

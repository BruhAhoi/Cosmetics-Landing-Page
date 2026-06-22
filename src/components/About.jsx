import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="mt-4 max-w-sm text-4xl leading-tight text-ink sm:text-5xl">
            {t.about.title}
          </h2>
        </Reveal>

        <Reveal delay={120} className="space-y-5 text-[15px] leading-relaxed text-ink/75">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </Reveal>
      </div>
    </section>
  )
}

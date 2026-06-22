import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

export default function ProcessingCTA() {
  const { t } = useLanguage()
  return (
    <section className="py-4">
      <Reveal className="container-x">
        <a
          href="#routine"
          className="group flex items-center justify-between gap-6 rounded-soft bg-forest px-8 py-7 text-cream transition-colors hover:bg-forest-deep sm:px-12"
        >
          <h3 className="text-2xl text-cream sm:text-3xl">{t.processing.title}</h3>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/40 text-xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
    </section>
  )
}

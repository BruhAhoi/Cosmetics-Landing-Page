import { pressLogos } from '../data/content.js'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Reveal from './Reveal.jsx'

export default function PressLogos() {
  const { t } = useLanguage()
  return (
    <section className="border-y border-line py-14">
      <Reveal className="container-x">
        <p className="text-center text-sm italic text-mute">{t.press.eyebrow}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {pressLogos.map((logo) => (
            <span
              key={logo}
              className="font-serif text-2xl font-semibold tracking-wide text-ink/55 transition-colors hover:text-ink sm:text-3xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

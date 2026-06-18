import { pressLogos } from '../data/content.js'

export default function PressLogos() {
  return (
    <section className="border-y border-line py-14">
      <div className="container-x">
        <p className="text-center text-sm italic text-mute">Xuất hiện trên</p>
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
      </div>
    </section>
  )
}

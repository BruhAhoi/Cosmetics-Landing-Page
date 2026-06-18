import { footerColumns } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream pt-16">
      <div className="container-x">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl tracking-[0.18em] text-ink">
              VELVETY
            </span>
            <span className="mt-0.5 block text-[10px] italic tracking-wide text-mute">
              chăm sóc da mặt
            </span>

            <div className="mt-6">
              <p className="text-sm font-medium text-ink">Giờ mở cửa</p>
              <p className="mt-1 text-sm text-mute">Thứ Hai đến Thứ Bảy:</p>
              <p className="text-sm text-mute">10:30 sáng đến 7 giờ tối</p>
            </div>

            <div className="mt-6 flex gap-3">
              {['Ig', 'Fb', 'Pin'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-xs text-ink/70 transition-colors hover:bg-cream-deep"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-mute transition-colors hover:text-moss"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-sm text-mute sm:flex-row">
          <p>Thiết kế bởi DhukaCreative. Cung cấp bởi UI8</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-moss">
              Giấy phép
            </a>
            <a href="#" className="hover:text-moss">
              Bảo mật
            </a>
            <a href="#" className="hover:text-moss">
              Điều khoản
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { navLinks } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-22 items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="leading-none">
          <span className="font-serif text-2xl tracking-[0.18em] text-ink">
            VELVETY
          </span>
          <span className="mt-0.5 block text-[10px] italic tracking-wide text-mute">
            chăm sóc da mặt
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
          >
            Đăng nhập
          </a>
          <a
            href="#featured"
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
          >
            Giỏ hàng (0)
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="Menu điều hướng"
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {[...navLinks, { label: 'Đăng nhập', href: '#' }, { label: 'Giỏ hàng (0)', href: '#featured' }].map(
              (link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ink/80 hover:bg-cream-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

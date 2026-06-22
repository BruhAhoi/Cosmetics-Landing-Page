import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // menu mobile
  const [pagesOpen, setPagesOpen] = useState(false) // dropdown "Trang" (desktop)
  // Mục đang chọn trong menu "Trang" — key dạng "left-2" (bền khi đổi ngôn ngữ).
  // Mặc định lấy mục có active: true trong data.
  const [activePage, setActivePage] = useState(() => {
    const li = t.pagesMenu.left.findIndex((i) => i.active)
    if (li !== -1) return `left-${li}`
    const ri = t.pagesMenu.right.findIndex((i) => i.active)
    return ri !== -1 ? `right-${ri}` : 'left-0'
  })

  const navLinks = [
    { label: t.nav.shop, href: '#featured' },
    { label: t.nav.about, href: '#about' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPagesOpen(false)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeAll = () => {
    setPagesOpen(false)
    setOpen(false)
  }

  // Nút chuyển ngôn ngữ VI / EN
  const LangToggle = ({ className = '' }) => (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] ${className}`}
      aria-label="Đổi ngôn ngữ / Switch language"
    >
      <span className={lang === 'vi' ? 'text-moss' : 'text-ink/40'}>VI</span>
      <span className="text-ink/25">/</span>
      <span className={lang === 'en' ? 'text-moss' : 'text-ink/40'}>EN</span>
    </button>
  )

  // Một mục trong menu "Trang" (dùng chung desktop + mobile)
  const PageItem = ({ item, col, idx, muted }) => {
    const isActive = activePage === `${col}-${idx}`
    return (
      <li>
        <a
          href={item.href}
          onClick={() => {
            setActivePage(`${col}-${idx}`)
            closeAll()
          }}
          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
            isActive
              ? 'bg-sage/50 font-medium text-ink'
              : muted
                ? 'text-mute hover:bg-cream-deep hover:text-ink'
                : 'text-ink/80 hover:bg-cream-deep hover:text-ink'
          }`}
        >
          {item.label}
        </a>
      </li>
    )
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[88px] items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="leading-none" onClick={closeAll}>
          <span className="font-serif text-2xl tracking-[0.18em] text-ink">VELVETY</span>
          <span className="mt-0.5 block text-[10px] italic tracking-wide text-mute">
            {t.nav.tagline}
          </span>
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-10 md:flex">
          {/* Dropdown "Trang" */}
          <li
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              onClick={() => setPagesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={pagesOpen}
              className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
            >
              {t.nav.pages}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${pagesOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Panel dropdown 2 cột */}
            {pagesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-4">
                <div className="rounded-2xl border border-line bg-cream p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-x-6">
                    <ul className="space-y-0.5">
                      {t.pagesMenu.left.map((item, idx) => (
                        <PageItem key={item.label} item={item} col="left" idx={idx} />
                      ))}
                    </ul>
                    <ul className="space-y-0.5">
                      {t.pagesMenu.right.map((item, idx) => (
                        <PageItem key={item.label} item={item} col="right" idx={idx} muted />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

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

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
          >
            {t.nav.login}
          </a>
          <a
            href="#featured"
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-moss"
          >
            {t.nav.cart}
          </a>
          <span className="h-4 w-px bg-line" />
          <LangToggle />
        </div>

        {/* Toggle mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ink"
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Menu mobile — danh sách trang 2 cột như design */}
      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <div className="container-x py-5">
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-0.5">
                {t.pagesMenu.left.map((item, idx) => (
                  <PageItem key={item.label} item={item} col="left" idx={idx} />
                ))}
              </ul>
              <ul className="space-y-0.5">
                {t.pagesMenu.right.map((item, idx) => (
                  <PageItem key={item.label} item={item} col="right" idx={idx} muted />
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
              <a
                href="#"
                onClick={closeAll}
                className="flex-1 rounded-full border border-line py-2.5 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink/80"
              >
                {t.nav.login}
              </a>
              <a
                href="#featured"
                onClick={closeAll}
                className="flex-1 rounded-full bg-moss py-2.5 text-center text-xs font-medium uppercase tracking-[0.18em] text-cream"
              >
                {t.nav.cart}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

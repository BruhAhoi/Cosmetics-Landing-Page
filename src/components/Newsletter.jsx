import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <div className="grid items-center gap-8 rounded-soft bg-forest px-8 py-12 text-cream sm:px-12 lg:grid-cols-2 lg:py-14">
          <h2 className="text-4xl leading-tight text-cream sm:text-5xl">
            Đăng ký để được giảm 10% cho đơn hàng đầu tiên
          </h2>

          <div>
            {sent ? (
              <p className="rounded-full bg-cream/15 px-6 py-4 text-center text-sm backdrop-blur">
                Cảm ơn bạn đã đăng ký! Hãy kiểm tra hộp thư nhé ✦
              </p>
            ) : (
              <form
                onSubmit={submit}
                className="flex items-center gap-2 rounded-full bg-cream p-1.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                  className="flex-1 bg-transparent px-5 py-2.5 text-sm text-ink outline-none placeholder:text-mute"
                />
                <button
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition-colors hover:bg-forest-deep"
                  aria-label="Đăng ký"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

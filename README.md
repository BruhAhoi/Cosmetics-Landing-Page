# Velvety — Cosmetics Landing Page

Landing page mỹ phẩm xây dựng bằng **React + Vite + Tailwind CSS v4** (JavaScript).

## Bắt đầu

```bash
npm install      # cài dependencies (đã chạy)
npm run dev      # chạy dev server (http://localhost:5173)
npm run build    # build production vào dist/
npm run preview  # xem thử bản build
```

## Cấu trúc

```
├─ index.html              # HTML gốc, nhúng Google Fonts (Cormorant Garamond + Jost)
├─ vite.config.js          # Vite + plugin React + plugin Tailwind v4
├─ src/
│  ├─ main.jsx             # entry point
│  ├─ App.jsx              # lắp ráp các section
│  ├─ index.css            # @theme design tokens + base styles Tailwind
│  ├─ data/
│  │  └─ content.js        # nội dung tập trung (nav, sản phẩm, đánh giá...)
│  └─ components/          # 13 section khớp design Figma "Home v1"
│     ├─ Navbar.jsx          # header cố định: VELVETY · Pages/Shop/About · Login/Cart
│     ├─ Hero.jsx            # "Let nature take care..." + ảnh lá xanh + Shop now
│     ├─ Inspired.jsx        # "Inspired by..." + 3 đặc điểm (Organic/Fits/Easy)
│     ├─ FeaturedProducts.jsx# 3 sản phẩm: CHICORI · NOTORIOUS · HOLOCENA
│     ├─ About.jsx           # "Velvety facial and skincare company"
│     ├─ PressLogos.jsx      # "As seen in" — VOGUE, Forbes, WWD...
│     ├─ ProcessingCTA.jsx   # thanh xanh "Let's see the processing..."
│     ├─ Routine.jsx         # bộ lọc + lưới 4 sản phẩm routine
│     ├─ Diagnosis.jsx       # "Your skin diagnosis in 3 minutes"
│     ├─ Testimonials.jsx    # đánh giá khách hàng + điều hướng
│     ├─ PromoColumns.jsx    # 3 cột: Loyalty · Refer · Treatments
│     ├─ Newsletter.jsx      # "Subscribe to get 10% off"
│     ├─ Footer.jsx          # opening hours + Shop/Help Desk/Stores
│     └─ Stars.jsx           # helper hiển thị số sao đánh giá
```

## Design tokens

Bảng màu & font định nghĩa trong `src/index.css` qua khối `@theme` của Tailwind v4
(`bg-cream`, `text-olive`, `font-serif`...). Đổi ở đây để áp dụng toàn bộ trang.

> Đây là bản scaffold theo tông Velvety. Sẽ tinh chỉnh bám sát design Figma sau
> khi có quyền truy cập file (duplicate file Community về tài khoản).

// Dữ liệu không phụ thuộc ngôn ngữ: ảnh, sản phẩm (giá VND + USD), logo báo chí.
// Toàn bộ text dịch nằm trong src/i18n.jsx.

import GreenHero from '../assets/GreenHero.jpg'
import LeftVelvetyHero from '../assets/LeftVelvetyHero.jpg'
import GreenPowder from '../assets/GreenPowder.jpg'
import LineArt from '../assets/Line-art.jpg'
import CHICORI from '../assets/CHICORI.jpg'
import NOTORIOUS from '../assets/NOTORIOUS.jpg'
import HOLOCENA from '../assets/HOLOCENA.jpg'
import CLASSWING from '../assets/CLASSWING.jpg'
import INAMORATA from '../assets/INAMOTARA.jpg'
import LIGHTCOOL from '../assets/LIGHTCOOL.jpg'

// Ảnh dùng chung cho từng section
export const heroLeaves = GreenHero
export const heroProduct = LeftVelvetyHero
export const inspiredImage = GreenPowder
export const diagnosisImage = LineArt
export const testimonialImage = HOLOCENA // dùng lại chai HOLOCENA

// Giá: priceVnd hiển thị khi ngôn ngữ VI, priceUsd khi EN.
export const featuredProducts = [
  {
    id: 1,
    name: 'CHICORI',
    priceVnd: '490.000₫',
    priceUsd: '$20',
    rating: '4.0',
    stars: 4,
    featured: false,
    image: CHICORI,
  },
  {
    id: 2,
    name: 'NOTORIOUS',
    priceVnd: '590.000₫',
    priceUsd: '$23',
    rating: '5.0',
    stars: 5,
    featured: true,
    image: NOTORIOUS,
  },
  {
    id: 3,
    name: 'HOLOCENA',
    priceVnd: '490.000₫',
    priceUsd: '$20',
    rating: '5.0',
    stars: 5,
    featured: false,
    image: HOLOCENA,
  },
]

export const routineProducts = [
  {
    id: 1,
    name: 'CLASSWING',
    priceVnd: '490.000₫',
    priceUsd: '$20',
    rating: '5.0',
    stars: 5,
    image: CLASSWING,
    tags: [1, 10, 14], // Bảo vệ, Làm dịu, Cấp ẩm
  },
  {
    id: 2,
    name: 'HOLOCANE',
    priceVnd: '590.000₫',
    priceUsd: '$23',
    rating: '5.0',
    stars: 5,
    image: HOLOCENA, // cùng chai HOLOCENA
    tags: [2, 6, 9], // Tái tạo, Thanh lọc, Chống oxy hóa
  },
  {
    id: 3,
    name: 'INAMORATA',
    priceVnd: '290.000₫',
    priceUsd: '$12',
    rating: '4.5',
    stars: 4,
    image: INAMORATA,
    tags: [8, 12, 14], // Tẩy tế bào chết, Làm săn da, Cấp ẩm
  },
  {
    id: 4,
    name: 'LIGHTCOOL',
    priceVnd: '550.000₫',
    priceUsd: '$22.5',
    rating: '5.0',
    stars: 5,
    image: LIGHTCOOL,
    tags: [1, 2, 16], // Bảo vệ, Tái tạo, Phục hồi sau tia UV
  },
]

export const pressLogos = ['VOGUE', 'Forbes', 'THOUGHT CATALOG', "Women's Health", 'WWD']

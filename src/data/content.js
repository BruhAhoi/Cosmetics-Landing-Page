// Nội dung tập trung — đã dịch sang tiếng Việt.
// Giữ nguyên tên thương hiệu/sản phẩm, tên báo chí và tên thành phố.
// Ảnh import từ src/assets để Vite bundle (trả về URL đã hash).

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

export const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Sản phẩm', href: '#featured' },
  { label: 'Giới thiệu', href: '#about' },
]

export const features = [
  {
    icon: 'organic',
    title: '100% Hữu cơ',
    desc: 'Chúng tôi tạo ra mỹ phẩm từ những nguyên liệu tinh túy nhất của thực vật, đất và khoáng chất.',
  },
  {
    icon: 'fits',
    title: 'Phù hợp làn da',
    desc: 'Hoàn toàn từ thiên nhiên, được xử lý dựa trên tri thức truyền thống kết hợp công nghệ hiện đại.',
  },
  {
    icon: 'easy',
    title: 'Dễ sử dụng',
    desc: 'Thiết kế độc đáo và tiện lợi, giúp bạn thực hiện quy trình chăm sóc da hằng ngày dễ dàng.',
  },
]

export const featuredProducts = [
  {
    id: 1,
    name: 'CHICORI',
    price: '$20',
    rating: '4.0',
    stars: 4,
    featured: false,
    image: CHICORI,
  },
  {
    id: 2,
    name: 'NOTORIOUS',
    price: '$23',
    rating: '5.0',
    stars: 5,
    featured: true,
    image: NOTORIOUS,
  },
  {
    id: 3,
    name: 'HOLOCENA',
    price: '$20',
    rating: '5.0',
    stars: 5,
    featured: false,
    image: HOLOCENA,
  },
]

export const pressLogos = [
  'VOGUE',
  'Forbes',
  'THOUGHT CATALOG',
  "Women's Health",
  'WWD',
]

export const routineFilters = [
  'Tất cả nhu cầu',
  'Bảo vệ',
  'Tái tạo',
  'Phục hồi',
  'Nuôi dưỡng',
  'Cân bằng',
  'Thanh lọc',
  'Tẩy trang',
  'Tẩy tế bào chết',
  'Chống oxy hóa',
  'Làm dịu',
  'Giảm mẩn đỏ',
  'Làm săn da',
  'Chống nhăn',
  'Cấp ẩm',
  'Tăng cường',
  'Phục hồi sau tia UV',
]

export const routineProducts = [
  {
    id: 1,
    name: 'CLASSWING',
    price: '$20',
    rating: '5.0',
    stars: 5,
    image: CLASSWING,
  },
  {
    id: 2,
    name: 'HOLOCANE',
    price: '$23',
    rating: '5.0',
    stars: 5,
    image: HOLOCENA, // cùng chai HOLOCENA
  },
  {
    id: 3,
    name: 'INAMORATA',
    price: '$12',
    rating: '4.5',
    stars: 4,
    image: INAMORATA,
  },
  {
    id: 4,
    name: 'LIGHTCOOL',
    price: '$22.5',
    rating: '5.0',
    stars: 5,
    image: LIGHTCOOL,
  },
]

export const promos = [
  {
    icon: 'gift',
    label: 'Chương trình thành viên',
    title: 'Cho làn da hạnh phúc',
    cta: 'Tham gia ngay',
  },
  {
    icon: 'heart',
    label: 'Vẻ đẹp hữu cơ là sẻ chia',
    title: 'Tặng người bạn yêu thương!',
    cta: 'Giới thiệu bạn bè',
  },
  {
    icon: 'spa',
    label: 'Tự thưởng cho mình',
    title: 'Tin vào vẻ rạng rỡ tại Maison Absolution',
    cta: 'Trải nghiệm liệu trình',
  },
]

export const footerColumns = [
  {
    title: 'Mua sắm',
    links: [
      'Chăm sóc da',
      'Chăm sóc da mặt',
      'Xà phòng',
      'Nến thơm',
      'Nước hoa',
      'Quà tặng',
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      'Trò chuyện',
      'Câu hỏi thường gặp',
      'Vận chuyển & Đổi trả',
      'Liên hệ',
      'Chính sách',
      'Trợ năng',
      'Tài khoản',
    ],
  },
  {
    title: 'Chi nhánh',
    links: ['Manhattan', 'Brooklyn', 'Tokyo', 'Jakarta', 'Paris', 'Buenos Aires'],
  },
]

// Hiển thị số sao đánh giá + điểm.
export default function Stars({ count = 5, rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-moss">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < count ? 'opacity-100' : 'opacity-30'}>
            ★
          </span>
        ))}
      </div>
      {rating && <span className="text-xs text-mute">{rating}</span>}
    </div>
  )
}

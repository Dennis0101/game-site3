import ProductCard from './ProductCard'

export default function ProductList({ onLoginClick }) {
  const items = [
    { type: 'JUST', gradient: 'just', description: '저스트...', prices: ['1일|13,000원','7일|75,000원','30일|200,000원'] },
    { type: 'DAY', gradient: 'day', description: '데이...', prices: ['1일|15,000원','7일|90,000원','30일|250,000원'] },
    // 추가 카드 삽입 가능
  ]
  return (
    <div className="grid gap-4 p-4">
      {items.map(item => (
        <ProductCard key={item.type} {...item} onLoginClick={onLoginClick} />
      ))}
    </div>
  )
}

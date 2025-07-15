export default function FAQ() {
  const faqs = [
    '핵 구매 후 코드 시간은 바로 흐르나요?',
    '윈도우 보안(디펜더) 와 백신은 어떻게 종료하나요?',
    '게임핵 본계정으로 사용해도 정지 안당하나요?',
    '핵을 사용하는 것은 불법이며 법적 처벌을 받나요?'
  ]
  return (
    <section className="p-4 space-y-2">
      <h2 className="text-xl font-bold text-white">QnA</h2>
      {faqs.map((q,i) => (
        <p key={i} className="text-gray-300">{q}</p>
      ))}
    </section>
  )
}

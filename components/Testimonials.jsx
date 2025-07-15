export default function Testimonials() {
  const reviews = [
    { user: 'rud*****', tag: 'RVIP', text: '히트 ㅋㅋㅋㅋ'},
    { user: 'tng*****', tag: '구매자', text: '서든핵 데이 후기'},
  ]
  return (
    <section className="p-4 space-y-2">
      <h2 className="text-xl font-bold text-white">구매후기</h2>
      {reviews.map((r,i) => (
        <p key={i}><span className="text-teal-400">{r.user}</span> · <span className="font-semibold">{r.tag}</span> - {r.text}</p>
      ))}
    </section>
  )
}

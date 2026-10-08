import Link from 'next/link';
import Counter from '../components/Counter';
export default function Home() {
  return <section className="card"><p className="eyebrow">NEXT.JS PRACTICE</p><h1>나의 메모 연습장</h1><p className="muted">숫자를 세어 보고, 메모를 작성해 보세요.</p><Counter /><Link className="linkbutton" href="/notes">메모 화면으로 이동 →</Link></section>;
}

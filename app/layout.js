import Link from 'next/link';
import './globals.css';
export const metadata = { title: '메모 연습장', description: 'Next.js와 React state 메모 실습' };
export default function RootLayout({ children }) {
  return <html lang="ko"><body><header className="top"><div className="nav"><strong>메모 연습장</strong><nav><Link href="/">홈</Link><Link href="/notes">메모</Link></nav></div></header><main className="container">{children}</main><footer>Next.js · React useState 실습</footer></body></html>;
}

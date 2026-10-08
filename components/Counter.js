'use client';
import { useState } from 'react';
export default function Counter() {
 const [count,setCount]=useState(0);
 return <div className="counter"><span>현재 숫자</span><strong aria-live="polite">{count}</strong><div className="actions"><button onClick={()=>setCount(c=>c+1)}>+1 증가</button><button className="secondary" onClick={()=>setCount(0)}>초기화</button></div></div>;
}

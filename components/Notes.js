'use client';
import { useState } from 'react';
const initialNotes = [{id:1,content:'첫 번째 메모'},{id:2,content:'오늘 배운 내용 정리하기'}];
export default function Notes() {
 const [notes,setNotes]=useState(initialNotes);
 const [input,setInput]=useState('');
 const [editingId,setEditingId]=useState(null);
 const [error,setError]=useState('');
 const [nextId,setNextId]=useState(3);
 function resetForm(){setInput('');setEditingId(null);setError('');}
 function submit(e){
   e.preventDefault();const trimmed=input.trim();
   if(!trimmed){setError('공백이 아닌 메모 내용을 입력해 주세요.');return;}
   if(editingId===null){setNotes(old=>[...old,{id:nextId,content:trimmed}]);setNextId(id=>id+1);}
   else setNotes(old=>old.map(note=>note.id===editingId?{...note,content:trimmed}:note));
   resetForm();
 }
 function edit(note){setEditingId(note.id);setInput(note.content);setError('');}
 function remove(id){
   if(!window.confirm('이 메모를 삭제할까요?'))return;
   setNotes(old=>old.filter(note=>note.id!==id));
   if(editingId===id)resetForm();
 }
 return <div className="notes"><form onSubmit={submit}><label htmlFor="note-text">{editingId===null?'새 메모':'메모 수정'}</label><textarea id="note-text" value={input} onChange={e=>{setInput(e.target.value);if(error)setError('');}} rows={3} placeholder="메모를 입력하세요" />{error&&<p role="alert" className="error">{error}</p>}<div className="actions"><button type="submit">{editingId===null?'메모 등록':'수정 저장'}</button>{editingId!==null&&<button type="button" className="secondary" onClick={resetForm}>수정 취소</button>}</div></form><h2>메모 목록 <span className="number">{notes.length}</span></h2>{notes.length===0?<p className="empty">등록된 메모가 없습니다. 첫 메모를 작성해 보세요.</p>:<ul className="note-list">{notes.map(note=><li key={note.id}><p>{note.content}</p><div className="actions"><button type="button" className="secondary small" onClick={()=>edit(note)}>수정</button><button type="button" className="danger small" onClick={()=>remove(note.id)}>삭제</button></div></li>)}</ul>}<p className="hint">메모는 브라우저의 React state에만 저장되므로 새로고침하면 초기 메모로 돌아옵니다.</p></div>;
}

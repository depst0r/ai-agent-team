'use client'
import { useState } from "react";


export default function Home() {

  const [agent, setAgent] = useState( 'designer')
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const send = () => {
    setLoading(true)
    fetch('/api/chat/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message, agent})
    })
      .then(res => {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  })
  .then(res => {
    setReply(res.reply)
    setLoading(false)
  })
  .catch(error => {
    console.error(error.message)
    setLoading(false)
  })
  }
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50  dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Мой первый AI помошник </h1>
        <select value={agent} onChange={e => setAgent(e.target.value)  }>
          <option value="designer">Дизайнер</option>
          <option value="developer">Разработчик</option>
          <option value="tester">Тестировщик</option>
        </select>
        <textarea 
        rows={4} 
        placeholder="Задание для агента" 
        value={message}
        onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button 
        onClick={() => send()}
        disabled={loading}
        type="button">{loading ? 'Думает...' : 'Отправить'}</button>
        {
          reply && 
          <div className="reply flex flex-col flex-1 items-center justify-center bg-zinc-50 whitespace-pre-wrap" >{reply}</div>
        }
        
      </main>
    </div>
    </>
  );
}

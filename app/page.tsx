'use client'
import { CodeBlock } from "@/components/CodeBlock";
import { useState } from "react";
import Markdown from 'react-markdown'


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
    setMessage('')
  })
  .catch(error => {
    console.error(error.message)
    setLoading(false)
  })
  }
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-slate-900">
      <main className="flex flex-col w-full max-w-3xl gap-6 p-8 bg-zinc-900 text-zinc-100">
        <h1>AI помошник </h1>
        <select className="bg-zinc-800 text-zinc-100 border-2 border-zinc-600 p-2 shadow-[4px_4px_0_0_#000] focus:outline-none focus:border-zinc-400" value={agent} onChange={e => setAgent(e.target.value)}>
          <option value="designer" className="bg-zinc-800 text-zinc-100">Дизайнер</option>
          <option value="developer" className="bg-zinc-800 text-zinc-100">Разработчик</option>
          <option value="tester" className="bg-zinc-800 text-zinc-100">Тестировщик</option>
        </select>
        <textarea
        className="bg-zinc-800 text-zinc-100 border-2 border-zinc-600 p-2 shadow-[4px_4px_0_0_#000] focus:outline-none focus:border-zinc-400"
        rows={4} 
        placeholder="Задание для агента" 
        value={message}
        onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button 
        onClick={() => send()}
        disabled={loading}
        className="cursor-pointer bg-zinc-800 text-zinc-100 border-2 border-zinc-600 p-2 active:translate-x-1 active:translate-y-1 disabled:opacity-50 shadow-[4px_4px_0_0_#000]"
        type="button">{loading ? 'Думает...' : 'Отправить'}</button>
        {
          reply && 
          <div className="bg-zinc-800 p-4 whitespace-pre-wrap shadow-[4px_4px_0_0_#000]" >
            <Markdown components={{code: CodeBlock}}>{reply}</Markdown>  
            </div>
        }
        
      </main>
    </div>
    </>
  );
}

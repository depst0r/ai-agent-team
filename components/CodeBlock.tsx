'use client'
import { useState, ReactNode } from "react"

export const CodeBlock = ({children, className} : {children?: ReactNode, className?: string}) => {

    const [copied, setCopied] = useState(false)

    return  className ? (
        <div className="relative">
            <button 
            className="absolute top-2 right-2 px-2 py-1 cursor-pointer bg-zinc-800 text-zinc-100 border-2 border-zinc-600 shadow-[2px_2px_0_0_#000] active:translate-x-1 active:translate-y-1"
            onClick={() => {
                navigator.clipboard.writeText(String(children ?? ''))
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            }}
            >{!copied ? 'копировать' : 'скопировано'}</button>
            <pre className="bg-zinc-950 overflow-x-auto text-sm p-4">
                <code>{children}</code>
            </pre>
            </div>
        ) : (
            <code>{children}</code>
        )
}

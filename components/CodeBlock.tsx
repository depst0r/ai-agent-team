'use client'
import { useState, ReactNode } from "react"

export const CodeBlock = ({children, className} : {children?: ReactNode, className?: string}) => {

    const [copied, setCopied] = useState(false)

    return  className ? (
        <div className="relative">
            <button 
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => {
            navigator.clipboard.writeText(String(children ?? ''))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
            }}
            >{!copied ? 'Копировать' : 'Скопировано!'}</button>
            <pre className="bg-zinc-950 overflow-x-auto text-sm p-4">
                <code>{children}</code>
            </pre>
            </div>
        ) : (
            <code>{children}</code>
        )
}

'use client'

type Props = {
    value: string
    onChange: (value: string) => void
}

export const AgentSelect = ({value, onChange}: Props) => (
        <select
            className="bg-zinc-800 text-zinc-100 border-2 border-zinc-600 p-2 shadow-[4px_4px_0_0_#000] focus:outline-none focus:border-zinc-400"
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option value="designer" className="bg-zinc-800 text-zinc-100">Дизайнер</option>
            <option value="developer" className="bg-zinc-800 text-zinc-100">Разработчик</option>
            <option value="tester" className="bg-zinc-800 text-zinc-100">Тестировщик</option>
        </select>
)
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="rounded-md p-3 hover:bg-zinc-50">
      {children}
    </button>
  )
}

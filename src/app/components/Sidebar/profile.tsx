import { LogOut } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/matheuskaully.png"
        alt="profile photo"
        width={200}
        height={200}
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Matheus Kaúlly
        </span>
        <span className="truncate text-sm text-zinc-700">
          matheuskaully@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}

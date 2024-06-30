'use client'

import { User } from 'lucide-react'
import { useFileInput } from './root'
import { useMemo } from 'react'
import Image from 'next/image'

export default function ImagePreview() {
  const { files } = useFileInput()
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
        <User className="size-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        alt=""
        width={300}
        height={300}
        className="size-16 rounded-full object-cover"
      />
    )
  }
}

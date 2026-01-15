// Components
import SelectOsDropdown from './SelectOsDropdown'

// Types
import type { Os } from '@/types/projects'

// React
import { useState } from 'react'

interface Props {
  text: string
  inDevelopment: boolean
  githubRepoName: string
  imgAltText: string
  availableOs: Os[]
  dropdownSelectOsTitle: string
}

export default function DownloadButton({
  text,
  inDevelopment,
  githubRepoName,
  imgAltText,
  dropdownSelectOsTitle,
  availableOs
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = (os: Os) => {
    try {
      if (inDevelopment) return

      console.log(`Downloading app for ${os}...`)

      setIsOpen(false)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="relative inline-block">
      <button
        disabled={inDevelopment}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={`
          px-6 py-2.5 border rounded-lg border-neutral-400
          hover:border-neutral-500 dark:border-neutral-700
          dark:hover:border-neutral-600 hover:cursor-pointer dark:text-white
          disabled:cursor-not-allowed disabled:opacity-60 text-neutral-800
        `}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-base">{text}</span>
          <img
            src="/icons/download-arrow.svg"
            alt={imgAltText}
            width={26}
            height={25}
            decoding="async"
            loading="lazy"
            fetchPriority="auto"
            className="invert-0 dark:invert"
          />
        </div>
      </button>

      <SelectOsDropdown
        dropdownSelectOsTitle={dropdownSelectOsTitle}
        availableOs={availableOs}
        isOpen={isOpen}
        onSelect={handleDownload}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </div>
  )
}

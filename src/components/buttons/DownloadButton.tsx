// Components
import SelectOsDropdown from '../dropdowns/SelectOsDropdown'

// Types
import type { Os } from '@/types/projects'
import { getDownloadUrl } from '@/utils/get-download-url'

// React
import { useState } from 'react'

interface Props {
  text: string
  inDevelopment: boolean
  githubRepoName: string
  imgAltText: string
  availableOs: Os[]
  dropdownSelectOsTitle: string
  downloadingText: string
}

export default function DownloadButton({
  text,
  inDevelopment,
  githubRepoName,
  imgAltText,
  dropdownSelectOsTitle,
  availableOs,
  downloadingText
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = (os: Os) => {
    setIsDownloading(true)

    getDownloadUrl({ githubRepoName, os })
      .then(downloadUrl => {
        const $a = document.createElement('a')

        $a.setAttribute('href', downloadUrl)
        $a.click()
        $a.remove()

        setIsOpen(false)
      })
      .catch((e: unknown) => {
        console.error(e)
      })
      .finally(() => {
        setIsDownloading(false)
      })
  }

  return (
    <div className="relative inline-block">
      <button
        disabled={inDevelopment || isDownloading}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={`
          w-full px-6 py-2.5 border rounded-lg border-neutral-400
          hover:border-neutral-500 dark:border-neutral-700
          dark:hover:border-neutral-600 hover:cursor-pointer dark:text-white
          disabled:cursor-not-allowed disabled:opacity-60 text-neutral-800
        `}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-base">
            {isDownloading ? downloadingText : text}
          </span>
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

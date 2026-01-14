interface Props {
  inDevelopment: boolean
  githubRepoName: string
  imgAltText: string
}

export default function DownloadButton({
  inDevelopment,
  githubRepoName,
  imgAltText
}: Props) {
  const handleClick = () => {
    try {
      if (inDevelopment) return

      console.log('Downloading app...')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <button
      disabled={inDevelopment}
      onClick={handleClick}
      className={`
        px-6 py-2.5 border rounded-lg border-neutral-400
        hover:border-neutral-500 dark:border-neutral-700
        dark:hover:border-neutral-600 hover:cursor-pointer dark:text-white
        disabled:cursor-not-allowed disabled:opacity-60 text-neutral-800
      `}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-base">Download</p>
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
  )
}

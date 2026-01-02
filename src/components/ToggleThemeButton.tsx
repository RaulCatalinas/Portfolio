import ThemeIcon from '@/assets/theme-light-dark.svg?react'

export default function ToggleThemeButton() {
  const handleClick = () => {
    console.log('Changing theme...')
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 hover:bg-neutral-800/50 hover:cursor-pointer rounded"
    >
      <ThemeIcon className="w-7 h-7 text-white" title="Toggle theme icon" />
    </button>
  )
}

import type { Os } from '@/types/projects'

interface Props {
  isOpen: boolean
  dropdownSelectOsTitle: string
  availableOs: Os[]
  onSelect: (os: Os) => void
  onClose: () => void
}

const osOptions: Array<{ value: Os; label: string }> = [
  { value: 'windows', label: 'Windows' },
  { value: 'macos', label: 'macOS' },
  { value: 'linux', label: 'Linux' },
  { value: 'android', label: 'Android' },
  { value: 'ios', label: 'iOS' }
]

export default function SelectOsDropdown({
  isOpen,
  dropdownSelectOsTitle,
  availableOs,
  onSelect,
  onClose
}: Props) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute top-full mt-2 left-0 z-20 min-w-50">
        <ul
          role="menu"
          aria-label={dropdownSelectOsTitle}
          className="flex flex-col items-center justify-center bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {osOptions.map(({ value, label }) => {
            const isAvailable = availableOs.includes(value)

            return (
              <li key={value} role="none">
                <button
                  onClick={() => {
                    onSelect(value)
                  }}
                  role="menuitem"
                  disabled={!isAvailable}
                  aria-disabled={!isAvailable}
                  className={`
                    w-full text-left px-4 py-2.5 transition-colors flex
                    items-center gap-3
                    ${
                      isAvailable
                        ? 'hover:bg-gray-700/50 text-gray-200 cursor-pointer active:bg-gray-700'
                        : 'text-gray-500 cursor-not-allowed opacity-50'
                    }
                  `}
                >
                  <span className="font-medium text-center">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

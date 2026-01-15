// Services
import { getAssets } from '@/services/get-assets'

// Types
import type { Os } from '@/types/projects'

interface Props {
  githubRepoName: string
  os: Os
}

export async function getDownloadUrl({ githubRepoName, os }: Props) {
  const assets = await getAssets(githubRepoName)

  const assetToDownload = assets.find(asset =>
    asset.name.toLowerCase().includes(os)
  )

  if (assetToDownload === undefined) throw new Error('Asset not found')

  const { browser_download_url: browserDownloadUrl } = assetToDownload

  return browserDownloadUrl
}

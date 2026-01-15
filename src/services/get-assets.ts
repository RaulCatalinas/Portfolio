// Constants
import { BASE_API_URL } from '@/constants/github'

// Types
import type { GitHubAPIResponse } from '@/types/api-github'

export async function getAssets(githubRepoName: string) {
  const res = await fetch(BASE_API_URL.replace('{REPO}', githubRepoName))

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { assets }: GitHubAPIResponse = await res.json()

  return assets
}

import type { SocialNetwork } from '@/types/social-network'
import { EMAIL_ADDRESS } from './email'
import { GITHUB_URL } from './github'

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    url: GITHUB_URL,
    iconPath: '/icons/github.svg',
    iconAltText: 'GitHub Icon',
    invertColors: true
  },
  {
    url: 'https://x.com/CatalinasRaul',
    iconPath: '/icons/twitter.svg',
    iconAltText: 'Twitter/X Icon',
    invertColors: false
  },
  {
    url: EMAIL_ADDRESS,
    iconPath: '/icons/email.svg',
    iconAltText: 'Email Icon',
    invertColors: true
  }
] as const

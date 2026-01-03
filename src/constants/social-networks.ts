import type { SocialNetwork } from '@/types/social-network'

export const socialNetworks: SocialNetwork[] = [
  {
    url: 'https://github.com/RaulCatalinas',
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
    url: 'mailto:raulcatalinas@gmail.com',
    iconPath: '/icons/email.svg',
    iconAltText: 'Email Icon',
    invertColors: true
  }
] as const

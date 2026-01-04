import type { SocialNetwork } from '@/types/social-network'

export const socialNetworks: SocialNetwork[] = [
  {
    url: 'https://github.com/RaulCatalinas',
    iconPath: '/icons/github.svg',
    iconAltText: 'GitHub Icon',
    invertColors: true,
    type: 'link'
  },
  {
    url: 'https://x.com/CatalinasRaul',
    iconPath: '/icons/twitter.svg',
    iconAltText: 'Twitter/X Icon',
    invertColors: false,
    type: 'link'
  },
  {
    url: 'mailto:raulcatalinas@gmail.com',
    iconPath: '/icons/email.svg',
    iconAltText: 'Email Icon',
    invertColors: true,
    type: 'email'
  }
] as const

import type { AppLanguages } from '@/types/languages'

export const languages = {
  en: 'English',
  es: 'Español'
} as const

export const defaultLang: AppLanguages = 'en'

export const ui = {
  en: {
    'about.sectionTitle': 'About Me',
    'about.intro':
      'A little bit about my technical and professional background.',
    'about.descriptionPart1':
      "Junior Full Stack Developer specializing in backend development and application logic. Currently expanding my mobile development skills through SEPE's Mobile Application Development program.",
    'about.descriptionPart2':
      'I build functional, well-structured applications and have published several libraries that other developers use. Looking for opportunities to contribute to impactful projects and grow alongside experienced teams.',
    'about.technicalSkills': 'Technical Skills',
    'featureProjects.sectionTitle': 'Featured Projects',
    'featureProjects.viewCode': 'View Code',
    'featureProjects.viewPackage': 'View Package',
    'devStatus.comingSoon': 'Coming soon'
  },
  es: {
    'about.sectionTitle': 'Sobre Mí',
    'about.intro': 'Un poco sobre mi experiencia técnica y profesional.',
    'about.descriptionPart1':
      'Desarrollador Full Stack Junior especializado en desarrollo backend y lógica de aplicaciones. Actualmente ampliando mis habilidades en desarrollo móvil a través del programa de Desarrollo de Aplicaciones Móviles del SEPE.',
    'about.descriptionPart2':
      'Construyo aplicaciones funcionales y bien estructuradas, y he publicado varias librerías que otros desarrolladores utilizan. Busco oportunidades para contribuir a proyectos impactantes y crecer junto a equipos experimentados.',
    'about.technicalSkills': 'Habilidades Técnicas',
    'featureProjects.sectionTitle': 'Proyectos Destacados',
    'featureProjects.viewCode': 'Ver Código',
    'featureProjects.viewPackage': 'Ver Paquete',
    'devStatus.comingSoon': 'Próximamente'
  }
} as const

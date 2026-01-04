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
      "Junior Backend Developer with experience in application logic and problem-solving. Currently expanding my skills in mobile development through SEPE's Mobile Application Development program.",
    'about.descriptionPart2':
      'I focus on building functional, maintainable code and have published libraries for other developers. Seeking opportunities to contribute to meaningful projects and learn from experienced teams.',
    'about.technicalSkills': 'Technical Skills',
    'featureProjects.sectionTitle': 'Featured Projects',
    'featureProjects.viewCode': 'View Code',
    'featureProjects.viewPackage': 'View Package',
    'devStatus.comingSoon': 'Coming soon',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'contacts.contactMe': 'Get in Touch'
  },
  es: {
    'about.sectionTitle': 'Sobre Mí',
    'about.intro': 'Un poco sobre mi experiencia técnica y profesional.',
    'about.descriptionPart1':
      'Desarrollador Backend Junior con experiencia en lógica de aplicaciones y resolución de problemas. Actualmente ampliando mis habilidades en desarrollo móvil a través del programa del SEPE.',
    'about.descriptionPart2':
      'Me enfoco en construir código funcional y mantenible, y he publicado librerías para otros desarrolladores. Busco oportunidades para contribuir a proyectos significativos y aprender de equipos experimentados.',
    'about.technicalSkills': 'Habilidades Técnicas',
    'featureProjects.sectionTitle': 'Proyectos Destacados',
    'featureProjects.viewCode': 'Ver Código',
    'featureProjects.viewPackage': 'Ver Paquete',
    'devStatus.comingSoon': 'Próximamente',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'contacts.contactMe': 'Contáctame'
  }
} as const

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
      "Junior Mobile Developer with experience in Flutter and Android development. Currently completing SEPE's Mobile Application Development program, specializing in Kotlin and cross-platform solutions.",
    'about.descriptionPart2':
      'I build functional mobile applications and have published libraries for other developers. Seeking opportunities to contribute to mobile projects and grow in native and cross-platform development.',
    'about.technicalSkills': 'Technical Skills',
    'featureProjects.sectionTitle': 'Featured Projects',
    'featureProjects.viewCode': 'View Code',
    'featureProjects.viewPackage': 'View Package',
    'devStatus.comingSoon': 'Coming soon',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'contacts.contactMe': 'Contact Me',
    'hero.greeting': "Hi, I'm Raúl",
    'hero.title': 'Junior Mobile Developer',
    'hero.description':
      'I build functional, cross-platform mobile applications with Flutter and native Android apps with Kotlin. \nPassionate about clean code and user experience.',
    'hero.viewProjects': 'View Projects'
  },
  es: {
    'about.sectionTitle': 'Sobre Mí',
    'about.intro': 'Un poco sobre mi experiencia técnica y profesional.',
    'about.descriptionPart1':
      'Desarrollador Mobile Junior con experiencia en Flutter y desarrollo Android. Actualmente finalizando el programa de Desarrollo de Aplicaciones Móviles del SEPE, especializándome en Kotlin y soluciones multiplataforma.',
    'about.descriptionPart2':
      'Construyo aplicaciones móviles funcionales y he publicado librerías para otros desarrolladores. Busco oportunidades para contribuir a proyectos mobile y crecer en desarrollo nativo y multiplataforma.',
    'about.technicalSkills': 'Habilidades Técnicas',
    'featureProjects.sectionTitle': 'Proyectos Destacados',
    'featureProjects.viewCode': 'Ver Código',
    'featureProjects.viewPackage': 'Ver Paquete',
    'devStatus.comingSoon': 'Próximamente',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'contacts.contactMe': 'Contáctame',
    'hero.greeting': 'Hola, soy Raúl',
    'hero.title': 'Desarrollador Mobile Junior',
    'hero.description':
      'Construyo aplicaciones móviles funcionales y multiplataforma con Flutter y aplicaciones Android nativas con Kotlin. \nApasionado por el código limpio y la experiencia de usuario.',
    'hero.viewProjects': 'Ver Proyectos'
  }
} as const

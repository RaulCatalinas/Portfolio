import type { AppLanguages } from '@/types/languages'

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
    'featureProjects.availableFor': 'Available for:',
    'featureProjects.downloadText': 'Download',
    'featureProjects.downloadIconAtlText': 'Download icon',
    'featureProjects.dropdownSelectOsTitle': 'Select operating system',
    'featureProjects.downloadingText': 'Downloading...',
    'devStatus.comingSoon': 'Coming soon',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'contacts.contactMe': 'Contact me',
    'hero.greeting': "Hi, I'm Raúl",
    'hero.title': 'Junior Mobile Developer',
    'hero.description':
      'Building mobile apps with Flutter and Kotlin. Focused on clean code and great user experiences.',
    'hero.viewProjects': 'View Projects',
    'selectOs.dropdownTitle': 'Select an operating system'
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
    'featureProjects.availableFor': 'Disponible para:',
    'featureProjects.downloadText': 'Descargar',
    'featureProjects.downloadIconAtlText': 'Icono de descarga',
    'featureProjects.dropdownSelectOsTitle': 'Selecciona sistema operativo',
    'featureProjects.downloadingText': 'Descargando...',
    'devStatus.comingSoon': 'Próximamente',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'contacts.contactMe': 'Contáctame',
    'hero.greeting': 'Hola, soy Raúl',
    'hero.title': 'Desarrollador Mobile Junior',
    'hero.description':
      'Construyendo aplicaciones móviles con Flutter y Kotlin. Enfocado en código limpio y buena experiencia de usuario.',
    'hero.viewProjects': 'Ver Proyectos',
    'selectOs.dropdownTitle': 'Selecciona un sistema operativo'
  }
} as const

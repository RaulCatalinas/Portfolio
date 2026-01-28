import type { Project } from '@/types/projects'

export const PROJECTS: Project[] = [
  {
    title: 'EasyViewer',
    descriptions: {
      en: 'App to download YouTube videos. \nCompletely rebuilt from Python/Flet to Flutter for better performance.',
      es: 'Aplicación para descargar videos de YouTube. \nCompletamente reconstruida desde Python/Flet a Flutter para mejor rendimiento.'
    },
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_scale,f_auto,w_125,h_125,q_auto,dpr_auto/v1753656531/EasyViewer_aboiab.png',
    altText: 'EasyViewer logo',
    codeUrl: 'https://github.com/RaulCatalinas/EasyViewer',
    type: 'app',
    technologies: ['Dart', 'Flutter'],
    inDevelopment: false,
    osIcons: ['windows-icon'],
    githubRepoName: 'EasyViewer'
  },
  {
    title: 'README-Builder',
    descriptions: {
      en: 'Create professional README files in minutes. \nSimple form-based interface for developers who want great documentation without the hassle.',
      es: 'Crea archivos README profesionales en minutos. \nInterfaz basada en formularios para desarrolladores que quieren una documentación genial sin complicaciones.'
    },
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_scale,f_auto,w_125,h_125,q_auto,dpr_auto/v1753656132/ReadmeCraft_asxz45.png',
    altText: 'README-Builder logo',
    codeUrl: 'https://github.com/RaulCatalinas/README-Builder',
    type: 'app',
    technologies: ['Dart', 'Flutter'],
    inDevelopment: true,
    osIcons: ['windows-icon'],
    githubRepoName: 'README-Builder'
  },
  {
    title: 'Wizipedia',
    descriptions: {
      en: 'Native Android app that allows users to explore the Harry Potter universe through a modern interface built with Jetpack Compose. \nConsumes a REST API to display characters, houses, spells, and multimedia content.',
      es: 'Aplicación Android nativa que permite explorar el universo de Harry Potter mediante una interfaz moderna desarrollada con Jetpack Compose. \nConsume una API REST para mostrar personajes, casas, hechizos y contenido multimedia.'
    },
    codeUrl: 'https://github.com/RaulCatalinas/Wizipedia-Android',
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_scale,f_auto,w_125,h_125,q_auto,dpr_auto/v1769593746/wizipedia-logo_yrzqac.svg',
    type: 'app',
    altText: 'Wizipedia app logo',
    inDevelopment: true,
    osIcons: ['android-icon'],
    githubRepoName: 'Wizipedia-Android',
    technologies: ['Kotlin', 'Jetpack Compose']
  },
  {
    title: 'SkyPulse',
    descriptions: {
      en: 'Real-time weather forecast Android app with automatic geolocation. Built with Kotlin and Jetpack Compose as final project for SEPE Android Development course.',
      es: 'Aplicación Android de pronóstico meteorológico en tiempo real con geolocalización automática. Desarrollada con Kotlin y Jetpack Compose como proyecto final del curso de Desarrollo Android de SEPE.'
    },
    codeUrl: 'https://github.com/RaulCatalinas/SkyPulse',
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_scale,f_auto,w_125,h_125,q_auto,dpr_auto/v1769594714/skypulse-icon_pjrvck.svg',
    type: 'app',
    altText: 'SkyPulse app logo',
    inDevelopment: true,
    osIcons: ['android-icon'],
    githubRepoName: 'Wizipedia-Android',
    technologies: ['Kotlin', 'Jetpack Compose']
  },
  {
    title: 'LogKeeper',
    descriptions: {
      en: 'Simple file logger that works out of the box with automatic timestamping and session management',
      es: 'Logger simple para archivos que funciona de inmediato con timestamps automáticos y gestión de sesiones'
    },
    codeUrl: 'https://github.com/RaulCatalinas/LogKeeper',
    type: 'library',
    programmingLanguage: 'Dart',
    packageUrl: 'https://pub.dev/packages/logkeeper',
    inDevelopment: false
  },
  {
    title: 'Flutter-Themed',
    descriptions: {
      en: 'A simple, plug-and-play theme management library for Flutter with optional persistence and zero configuration required.',
      es: 'Una biblioteca de gestión de temas simple y lista para usar para Flutter con persistencia opcional y sin configuración requerida.'
    },
    codeUrl: 'https://github.com/RaulCatalinas/Flutter-Themed',
    type: 'library',
    programmingLanguage: 'Dart',
    packageUrl: 'https://pub.dev/packages/flutter_themed',
    inDevelopment: false
  }
] as const

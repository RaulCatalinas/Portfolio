import type { Project } from '@/types/projects'

export const projects: Project[] = [
  {
    title: 'EasyViewer',
    description:
      'App to download YouTube videos. \nCompletely rebuilt from Python/Flet to Flutter for better performance.',
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_scale,f_auto,h_125,q_auto,w_125/v1753656531/EasyViewer_aboiab.png',
    altText: 'EasyViewer logo',
    codeUrl: 'https://github.com/RaulCatalinas/EasyViewer',
    type: 'app'
  },
  {
    title: 'README-Builder',
    description:
      'Create professional README files in minutes. \nSimple form-based interface for developers who want great documentation without the hassle.',
    imageUrl:
      'https://res.cloudinary.com/dqqpzn8h9/image/upload/c_pad,w_125,h_125/v1753656132/ReadmeCraft_asxz45.png',
    altText: 'README-Builder logo',
    codeUrl: 'https://github.com/RaulCatalinas/README-Builder',
    type: 'app'
  },
  {
    title: 'LogKeeper',
    description:
      'Simple file logger that works out of the box with automatic timestamping and session management',
    codeUrl: 'https://github.com/RaulCatalinas/LogKeeper',
    type: 'library',
    programmingLanguage: 'Dart',
    packageUrl: 'https://pub.dev/packages/logkeeper'
  },
  {
    title: 'Flutter-Themed',
    description:
      'A simple, plug-and-play theme management library for Flutter with optional persistence and zero configuration required.',
    codeUrl: 'https://github.com/RaulCatalinas/Flutter-Themed',
    type: 'library',
    programmingLanguage: 'Dart',
    packageUrl: 'https://pub.dev/packages/flutter_themed'
  }
] as const

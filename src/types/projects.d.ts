export interface ProjectDescriptions {
  en: string
  es: string
}

interface BaseProject {
  title: string
  descriptions: ProjectDescriptions
  codeUrl: string
  inDevelopment: boolean
}

export interface AppProject extends BaseProject {
  type: 'app'
  imageUrl: string
  altText: string
  technologies: string[]
}

export interface LibraryProject extends BaseProject {
  type: 'library'
  packageUrl: string
  programmingLanguage: string
}

export type Project = AppProject | LibraryProject
export type ProjectType = Project['type']

interface BaseProject {
  title: string
  description: string
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

interface BaseProject {
  title: string
  description: string
  codeUrl: string
  programmingLanguage?: string
}

export interface AppProject extends BaseProject {
  type: 'app'
  imageUrl: string
  altText: string
}

export interface LibraryProject extends BaseProject {
  type: 'library'
  packageUrl: string
}

export type Project = AppProject | LibraryProject

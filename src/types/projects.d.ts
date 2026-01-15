export type OsIcon =
  | 'windows-icon'
  | 'macos-icon'
  | 'linux-icon'
  | 'android-icon'
  | 'ios-icon'

export type Os = 'windows' | 'macos' | 'linux' | 'android' | 'ios'

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
  osIcons: OsIcon[]
  githubRepoName: string
}

export interface LibraryProject extends BaseProject {
  type: 'library'
  packageUrl: string
  programmingLanguage: string
}

export type Project = AppProject | LibraryProject
export type ProjectType = Project['type']

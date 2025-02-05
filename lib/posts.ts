import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostData {
  id: string
  title: string
  date: string
  description: string
  content: string
}

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostById(id: string): PostData | null {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    console.log('Tentando ler arquivo:', fullPath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
    }
  } catch (error) {
    console.error('Erro ao ler post:', error)
    return null
  }
} 
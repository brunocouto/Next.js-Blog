import { getPostById } from '@/lib/posts'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { marked } from 'marked'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)

  if (!post) {
    notFound()
  }

  const htmlContent = marked(post.content)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="text-purple-600 hover:text-purple-800 mb-8 inline-block"
        >
          ← Voltar para Home
        </Link>
        
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">{post.title}</h1>
          <time className="text-gray-500 block mb-8">
            {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </time>
          <div 
            className="mt-8 prose-headings:text-purple-900 prose-a:text-purple-600"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </article>
      </main>
    </div>
  )
} 
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero Section com Robô */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 50 C250 50 150 150 150 300 C150 450 250 550 400 550 C550 550 650 450 650 300 C650 150 550 50 400 50" stroke="currentColor" strokeWidth="2"/>
            {/* Cabeça do Robô */}
            <rect x="350" y="100" width="100" height="120" rx="20" stroke="currentColor" strokeWidth="2"/>
            <circle cx="380" cy="140" r="10" fill="currentColor"/>
            <circle cx="420" cy="140" r="10" fill="currentColor"/>
            {/* Corpo */}
            <path d="M375 220 L375 400 Q400 420 425 400 L425 220" stroke="currentColor" strokeWidth="2"/>
            {/* Braços */}
            <path d="M375 250 L300 300 L325 350" stroke="currentColor" strokeWidth="2"/>
            <path d="M425 250 L500 300 L475 350" stroke="currentColor" strokeWidth="2"/>
            {/* Pernas */}
            <path d="M375 400 L350 500" stroke="currentColor" strokeWidth="2"/>
            <path d="M425 400 L450 500" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            IA Insights
          </h1>
          <p className="text-2xl text-purple-100 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Explorando as fronteiras da Inteligência Artificial
          </p>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Lista de Posts */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 rounded-xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link href={`/post/${post.id}`}>
                <h2 className="text-3xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-gray-500 mb-4 block">
                {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </time>
              <p className="text-gray-600 mb-4 text-lg">{post.description}</p>
              <Link
                href={`/post/${post.id}`}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Ler mais →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
} 
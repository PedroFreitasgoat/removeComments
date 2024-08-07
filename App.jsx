import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'

import styles from "./App.module.css"
import { Sidebar } from "./components/Siderbr"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https//github.com/PedroFreitasgoat.png',
      name: 'Pedro Freitas',
      role: 'CTO @ O mILIOR'
    },
    content: [
      { type: 'paragraph', content: 'Opa Gurizada, suave' },
      { type: 'paragraph',content: 'Meu nome é Pedro e eu sou op milioor, daq alguns meses estarei gahando mais de 5k por mês, ANOTEMM' },
      { type: 'link', content: '<a href="">pedro.freitas/dockwhor/</a>' },
    ],
    publishedAt: new Date('2024-08-07 00:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https//github.com/mariaemf.png',
      name: 'Maria Freitas',
      role: 'Educator @ JAVASKHRONOS'
    },
    content: [
      { type: 'paragraph', content: 'Opa Gurizada, suave' },
      { type: 'paragraph',content: 'Meu nome é Pedro e eu sou op milioor, daq alguns meses estarei gahando mais de 5k por mês, ANOTEMM' },
      { type: 'link', content: '<a href="">pedro.freitas/dockwhor/</a>' },
    ],
    publishedAt: new Date('2024-08-18 00:00:00')
  },
]

export function App() {
  return (
  <div> 
    <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })}
          </main>
        </div>
     </div>
  )
}

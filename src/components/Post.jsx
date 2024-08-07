import styles from './Posto.module.css'
import {Coment} from './Coment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

//auhtor: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Você é zika de mais, Pedrão.'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt," d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        // imutabilidade
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment() {
        
    }

    return(
        <article className={styles.post}>
            <header>
            <div className={styles.author}>
                <Avatar  src={author.avatarUrl} alt="" />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                name='comment'
                placeholder='Deixei um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                  <footer>
                     <button type='submite'>Publicar</button>
                </footer>  
            </form>

            <div className={styles.comentList}>
                {comments.map(comment => {
                    return <Coment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}
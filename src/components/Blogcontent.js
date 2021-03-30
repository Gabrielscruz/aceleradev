import styles from '../styles/components/blogcontent.module.css'
import { useEffect } from 'react'


export function Blogcontent(props) {
  const { urlgithub, urlyoutube, content } = props.ArticleM

  useEffect(() => {
    document.querySelector('#texto').innerHTML = (content ? content : '');
  }, [content])


  return (
    <div className={styles.blogcontent}>
      <div className={styles.divtag}>
        <a target="_blank" href={urlgithub ? urlgithub : ''} ><i className="fab fa-github"></i> GitHub</a>
        <h1></h1>
      </div>
      <div className={styles.divtext}>

        <iframe src={`https://www.youtube.com/embed/${(urlyoutube ? urlyoutube : '')}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>


        <div id="texto">
        </div>

      </div>
      <div className={styles.divcontent}></div>
    </div>
  )
}
import styles from '../styles/components/articles.module.css'
import { Link } from 'react-router-dom';

export function Articles(props) {
  const { _id, thumbnail, tipo, title } = props.ArticleM

  console.log(props.ArticleM)
  return (
    <>
      <Link to={_id ? `/articles/${_id}` : ''} >
        <div className={styles.article}>
          <img className={styles.thumbnail} src={thumbnail ? thumbnail : ''} width="100%" height="100%" />
          <div className={styles.title}>
            {title ? title : ''}
          </div>
          <div className={styles.rodape}>
            <p><span>&#x2770;</span> {tipo ? tipo : ''}</p>
          </div>
        </div>
      </Link>
    </>)
}
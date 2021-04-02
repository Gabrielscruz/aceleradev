import styles from '../styles/components/mainarticle.module.css'
import { Link } from 'react-router-dom';

export function Mainarticle(props) {
  const { autor, _id, datapost, thumbnail, title, } = props.ArticleM


  return (
    <>
      <Link to={_id ? `/articles/${_id}` : '/'} >
        <div className={styles.mainarticle}>
          <div className={styles.divleft}>
            <img src={(thumbnail ? thumbnail : undefined)} alt="mainarticle" />
          </div>

          <div className={styles.divright}>
            <div className={styles.top}>
              <button disabled><span>&#9733;</span> DESTAQUE</button>
            </div>
            <div className={styles.middle}>
              <h4>{(title ? title : undefined)}</h4>
            </div>
            <div className={styles.bottom}>
              <p>por <strong>{(autor ? autor : undefined)}</strong> Data da postagem  {(datapost ? datapost : '').toString().substring(0, 10)}</p>
            </div>
          </div>

        </div>
      </Link>
    </>
  )
}
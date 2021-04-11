import styles from '../styles/pages/Loading.module.css'
import { Link } from 'react-router-dom';
import Img from '../styles/imagens/erro404.gif'

export default function Erro404() {
  return (
    <div className={styles.container}>
      <Link to={'/'} >
        <div className={styles.all}>
          <i class="fas fa-reply-all"></i>
        </div>
      </Link>
      <img width="500px" src={Img} alt="erro404" />
    </div>
  )
}
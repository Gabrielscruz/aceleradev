import styles from '../styles/components/footer.module.css'


export function Footer() {
  return (
    <div className={styles.conteinerFooter}>
      <div className={styles.left}>

      </div>
      <div className={styles.middle}>

        <img className={styles.logo} src='https://aceleradev-backend.herokuapp.com/uploads/favicon.png' />
        © 2021 Aceleradev - Todos os direitos reservados
      </div>
      <div className={styles.right}>
        <div>
          <a target="_blank" href="https://www.facebook.com/aceleradev/"><i className="fab fa-facebook"></i></a>
          <a target="_blank" href="https://www.instagram.com/aceleradev/"><i className="fab fa-instagram"></i></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCpQYgA_Lvmyg6z2usJ8fTiA"><i className="fab fa-youtube-square"></i></a>
          <a target="_blank" href="mailto:suporte@aceleradev.com"><i className="far fa-envelope-open"></i></a>
        </div>
      </div>
    </div>
  )
}
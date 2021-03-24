import styles from '../styles/components/navigationbar.module.css'


export function Navigationbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logodiv}>
        <img className={styles.logo} src='https://aceleradev-backend.herokuapp.com/uploads/favicon.png' />
      </div>
      <nav className={styles.nav}>
        <button >HOME</button>
        <button >BACK END</button>
        <button >FRONT END</button>
        <button >AUTOMAÇÃO</button>
      </nav>
    </div>
  )
}

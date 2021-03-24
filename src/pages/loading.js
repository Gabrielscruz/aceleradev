import styles from '../styles/pages/Loading.module.css'


export default function Loading() {
  return (
    <div className={styles.container}>
      <img width="100px" src='https://aceleradev-backend.herokuapp.com/uploads/loading.gif' alt="Loading" />
    </div>
  )
}
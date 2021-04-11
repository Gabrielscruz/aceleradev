import styles from '../styles/pages/Loading.module.css'




export default function Loading(props) {

  return (
    <div className={styles.container}>
      <img width={props.Width} src={props.Img ? props.Img : 'https://aceleradev-backend.herokuapp.com/uploads/loading.gif'} alt="Loading" />
    </div>
  )
}
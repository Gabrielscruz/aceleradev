import styles from '../styles/pages/Home.module.css';
import { Link } from 'react-router-dom';
import { Mainarticle } from '../components/Mainarticle'
import { Blogcontent } from '../components/Blogcontent'
import { Footer } from '../components/Footer'
import LoadingM from './loading'
import api from '../service/api';
import { useState, useEffect } from "react";
import Favicon from '../styles/imagens/favicon.png'

export default function Article(props) {
  const [Articleunique, SetArticleunique] = useState([]);
  const [id] = useState(props.match.params.id);
  const [Loading, SetLoading] = useState(false);


  useEffect(() => {
    SetLoading(false)
    api.get(`/articles/${id}`).then(response => {
      SetArticleunique(response.data);
    }, [Article])

    function timeLoading() {
      SetLoading(true)
    }

    setTimeout(timeLoading, 900);
  }, [id]);

  if (!Loading) {
    return <><LoadingM Width={'100px'} Img='https://aceleradev-backend.herokuapp.com/uploads/loading.gif' /></>
  }





  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logodiv}>
            <img className={styles.logo} src={Favicon} alt='Favicon' />
          </div>
          <nav className={styles.nav}>
            <Link to={'/'} >
              <div className={styles.all}>
                <i class="fas fa-reply-all"></i>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <Mainarticle ArticleM={Articleunique} />
        <Blogcontent ArticleM={Articleunique} />

      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
